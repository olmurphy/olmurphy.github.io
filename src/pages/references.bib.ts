import type { APIRoute } from "astro";
import { PUBLICATIONS_CONTENT } from "@data/publications";

export const prerender = true;

export const GET: APIRoute = () => {
  const allPapers = [
    ...PUBLICATIONS_CONTENT.published,
    ...PUBLICATIONS_CONTENT.underReview,
    ...PUBLICATIONS_CONTENT.inProgress,
    ...PUBLICATIONS_CONTENT.talks,
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
