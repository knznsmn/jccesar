export function getSlugFromLink(link: string) {
  return link.split("/").filter(Boolean).at(-1) ?? "";
}
