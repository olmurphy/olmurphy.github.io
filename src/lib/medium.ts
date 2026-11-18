import fallbackPosts from "@data/medium-fallback.json";

export type WritingTopic = "research" | "engineering" | "learning";

export interface MediumPost {
  title: string;
  url: string;
  publishedAt: string;
  dateLabel: {
    en: string;
    zh: string;
  };
  readTimeMinutes: number;
  excerpt: string;
  coverSrc?: string;
  topic: WritingTopic;
  tags: string[];
}

const MEDIUM_FEED_URL = "https://owenmurphy2022.medium.com/feed";
const MAX_POSTS = 10;

let cachedPostsPromise: Promise<MediumPost[]> | null = null;

function decodeEntities(input: string): string {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)));
}

function stripHtml(html: string): string {
  return decodeEntities(html)
    .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block: string, tagName: string): string {
  const escaped = tagName.replace(":", "\\:");
  const match = block.match(
    new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "i"),
  );
  return match ? decodeEntities(match[1]).trim() : "";
}

function extractCategories(block: string): string[] {
  const matches = [
    ...block.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi),
  ];
  return matches.map((m) => decodeEntities(m[1]).trim()).filter(Boolean);
}

function extractCoverImage(html: string): string | undefined {
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
  for (const match of imgMatches) {
    const src = match[1];
    // Skip Medium 1x1 tracking pixels
    if (src && !src.includes("/_/stat?") && !src.includes("medium.com/_/")) {
      return src;
    }
  }
  return undefined;
}

function inferTopic(categories: string[], text: string): WritingTopic {
  const haystack = `${categories.join(" ")} ${text}`.toLowerCase();
  if (
    /\b(research|paper|neurips|biology|genomics|omics|protein|math|theorem|proof|spectral|manifold|calibration|distribution shift)\b/.test(
      haystack,
    )
  ) {
    return "research";
  }
  if (
    /\b(learn|learning|study|book|textbook|polymath|course|notes|primer|intuition|guide)\b/.test(
      haystack,
    )
  ) {
    return "learning";
  }
  return "engineering";
}

function formatDateLabels(pubDateStr: string): { en: string; zh: string } {
  const date = new Date(pubDateStr);
  if (Number.isNaN(date.getTime())) {
    return { en: pubDateStr, zh: pubDateStr };
  }
  return {
    en: new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date),
    zh: `${date.getFullYear()}年${date.getMonth() + 1}月`,
  };
}

function buildExcerpt(html: string, maxLen = 220): string {
  const clean = stripHtml(html);
  if (clean.length <= maxLen) return clean;
  const truncated = clean.slice(0, maxLen);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${(lastSpace > 120 ? truncated.slice(0, lastSpace) : truncated).trim()}…`;
}

function parseRssFeed(xml: string): MediumPost[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(
    0,
    MAX_POSTS,
  );

  return items
    .map((match): MediumPost | null => {
      const itemXml = match[1];
      const title = extractTag(itemXml, "title");
      const rawLink = extractTag(itemXml, "link");
      const url = rawLink.split("?")[0];
      const pubDate = extractTag(itemXml, "pubDate");
      const contentHtml =
        extractTag(itemXml, "content:encoded") ||
        extractTag(itemXml, "description");
      const categories = extractCategories(itemXml);

      if (!title || !url) return null;

      const plainText = stripHtml(contentHtml);
      const wordCount = plainText.split(/\s+/).filter(Boolean).length;
      const readTimeMinutes = Math.max(1, Math.round(wordCount / 225));
      const topic = inferTopic(
        categories,
        `${title} ${plainText.slice(0, 400)}`,
      );

      return {
        title,
        url,
        publishedAt: pubDate ? new Date(pubDate).toISOString() : "",
        dateLabel: formatDateLabels(pubDate),
        readTimeMinutes,
        excerpt: buildExcerpt(contentHtml),
        coverSrc: extractCoverImage(contentHtml),
        topic,
        tags: categories.slice(0, 3),
      };
    })
    .filter((post): post is MediumPost => post !== null);
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  if (!cachedPostsPromise) {
    cachedPostsPromise = (async () => {
      try {
        const res = await fetch(MEDIUM_FEED_URL, {
          headers: {
            Accept: "application/rss+xml, application/xml, text/xml",
            "User-Agent": "olmurphy.github.io-static-builder/1.0",
          },
          signal: AbortSignal.timeout(5000),
        });

        if (!res.ok) {
          throw new Error(`Medium RSS HTTP ${res.status}`);
        }

        const xml = await res.text();
        const parsed = parseRssFeed(xml);
        if (parsed.length > 0) {
          return parsed;
        }
      } catch (err) {
        console.warn(
          "[writing] Live Medium RSS fetch unavailable, using fallback snapshot:",
          err instanceof Error ? err.message : err,
        );
      }

      return (fallbackPosts as MediumPost[]).slice(0, MAX_POSTS);
    })();
  }

  return cachedPostsPromise;
}
