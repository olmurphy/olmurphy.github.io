export const R2_CONFIG = {
  bucket: "owenmurphy2022-portfolio-media",
  baseUrl: "https://pub-b7950172d9d042b69806db4a4b2ef5bb.r2.dev",
} as const;

export function mediaUrl(objectPath: string): string {
  const cleanPath = objectPath.replace(/^\/+/, "");
  return `${R2_CONFIG.baseUrl}/${cleanPath}`;
}
