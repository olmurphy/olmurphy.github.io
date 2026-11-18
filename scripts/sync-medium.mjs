import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const FEED_URL = "https://owenmurphy2022.medium.com/feed";
const OUT_FILE = new URL("../src/data/medium-fallback.json", import.meta.url);

function getProxyArgs() {
  // 1. Respect explicit environment variables first (e.g., if proxy_on is active)
  if (process.env.HTTPS_PROXY || process.env.https_proxy) {
    return [];
  }

  // 2. Auto-detect macOS System Proxy (e.g., Veee+ on 127.0.0.1:15236)
  if (process.platform === "darwin") {
    try {
      const scutil = execFileSync("scutil", ["--proxy"], { encoding: "utf8" });
      const enabled = /HTTPSEnable\s*:\s*1/.test(scutil);
      const host = scutil.match(/HTTPSProxy\s*:\s*(\S+)/)?.[1];
      const port = scutil.match(/HTTPSPort\s*:\s*(\d+)/)?.[1];

      if (enabled && host && port) {
        return ["-x", `http://${host}:${port}`];
      }
    } catch {
      // Ignore and fall back to direct connection
    }
  }

  return [];
}

const xml = execFileSync(
  "curl",
  ["-fsSL", "--max-time", "15", ...getProxyArgs(), FEED_URL],
  { encoding: "utf8" }
);

function decode(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(html) {
  return decode(html)
    .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, 10);
const posts = items.map((m) => {
  const item = m[1];
  const get = (tag) => {
    const esc = tag.replace(":", "\\:");
    const match = item.match(new RegExp(`<${esc}[^>]*>([\\s\\S]*?)<\\/${esc}>`, "i"));
    return match ? decode(match[1]).trim() : "";
  };

  const title = get("title");
  const url = get("link").split("?")[0];
  const pubDate = get("pubDate");
  const html = get("content:encoded") || get("description");
  const categories = [...item.matchAll(/<category[^>]*>([\s\S]*?)<\/category>/gi)]
    .map((c) => decode(c[1]).trim())
    .filter(Boolean);

  const plain = stripHtml(html);
  const words = plain.split(/\s+/).filter(Boolean).length;
  const date = new Date(pubDate);
  const haystack = `${categories.join(" ")} ${title} ${plain.slice(0, 400)}`.toLowerCase();

  let topic = "engineering";
  if (/\b(research|paper|neurips|biology|genomics|omics|protein|math|theorem|proof|spectral|manifold|calibration|distribution shift)\b/.test(haystack)) {
    topic = "research";
  } else if (/\b(learn|learning|study|book|textbook|polymath|course|notes|primer|intuition|guide)\b/.test(haystack)) {
    topic = "learning";
  }

  const coverMatch = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].find(
    (img) => img[1] && !img[1].includes("/_/stat?") && !img[1].includes("medium.com/_/"),
  );

  return {
    title,
    url,
    publishedAt: Number.isNaN(date.getTime()) ? "" : date.toISOString(),
    dateLabel: Number.isNaN(date.getTime())
      ? { en: pubDate, zh: pubDate }
      : {
          en: new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(date),
          zh: `${date.getFullYear()}年${date.getMonth() + 1}月`,
        },
    readTimeMinutes: Math.max(1, Math.round(words / 225)),
    excerpt: plain.length > 220 ? `${plain.slice(0, 220).replace(/\s+\S*$/, "")}…` : plain,
    ...(coverMatch ? { coverSrc: coverMatch[1] } : {}),
    topic,
    tags: categories.slice(0, 3),
  };
});

writeFileSync(OUT_FILE, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
console.log(`Synced ${posts.length} Medium posts to src/data/medium-fallback.json`);
