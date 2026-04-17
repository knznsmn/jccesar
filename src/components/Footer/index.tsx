import contents from "@/data/contents.json";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p>{contents.website.name} © {new Date().getFullYear()} · {contents.website.tagline}</p>
    </footer>
  );
}