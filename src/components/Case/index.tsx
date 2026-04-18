import { PortfolioPreview } from "@/components/PortfolioPreview";
import styles from "./Case.module.css";

type SectionAlign = "left" | "right" | "center";

type CaseProps = {
  title: string;
  image?: string;
  align: SectionAlign;
  children: React.ReactNode;
};

export function Case({ title, image, align, children }: CaseProps) {
  const alignmentClass =
    align === "left"
      ? styles.alignLeft
      : align === "center"
        ? styles.alignCenter
        : styles.alignRight;

  return (
    <section className={`${styles.section} ${alignmentClass}`}>
      <div className={styles.textColumn} data-reveal>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>{children}</div>
      </div>

      <div className={styles.imageColumn} data-reveal data-reveal-delay={120}>
        <PortfolioPreview
          src={image}
          alt={`${title} visual`}
          title={title}
          className={styles.image}
          sizes="(max-width: 820px) 92vw, (max-width: 1200px) 46vw, 620px"
        />
      </div>
    </section>
  );
}
