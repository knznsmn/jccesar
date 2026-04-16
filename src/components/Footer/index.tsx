import contents from "@/data/contents.json";
export function Footer() {
  return (
    <footer className="siteFooter">
      <p>{contents.website.name} © {new Date().getFullYear()} · {contents.website.tagline}</p>
    </footer>
  );
}