import type { APIRoute } from "astro";
import { getContent } from "@data";
import { getLocaleStaticPaths } from "@i18n/config";

export const prerender = true;

export function getStaticPaths() {
  return getLocaleStaticPaths();
}

export const GET: APIRoute = ({ params }) => {
  const content = getContent(params.lang === "zh" ? "zh" : "en");
  const allPapers = [
    ...content.publications.published,
    ...content.publications.underReview,
    ...content.publications.inProgress,
    ...content.publications.talks,
  ];

  const bibtexEntries = allPapers
    .filter((p) => p.bibtex)
    .map((p) => p.bibtex)
    .join("\n\n");

  return new Response(bibtexEntries, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
