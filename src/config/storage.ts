export const GCS_CONFIG = {
  bucket: "owenmurphy2022-portfolio-media",
  baseUrl: "https://storage.googleapis.com/owenmurphy2022-portfolio-media",
} as const;

export function mediaUrl(objectPath: string): string {
  const cleanPath = objectPath.replace(/^\/+/, "");
  return `${GCS_CONFIG.baseUrl}/${cleanPath}`;
}
