import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Linecraft
        </p>
        <h1 id="hero-title" className={styles.heroHeading}>
          Pushing pixels & bending lines.
        </h1>
        <p className={styles.heroLead}>
          Elevating brands through modern, human-centric design.
        </p>
      
        <p className={styles.heroMeta}>Photoshop | Illustrator | Vim | Git | Linux.</p>
      </div>

      <div className={styles.heroVisual} aria-hidden="true">
        <div className={`${styles.visualOrb} ${styles.visualOrbA}`} />
        <div className={`${styles.visualOrb} ${styles.visualOrbB}`} />
        <div className={`${styles.visualOrb} ${styles.visualOrbC}`} />
        <div className={styles.visualGrid} />
        <div className={styles.visualCard}>
          <p>Art direction</p>
          <p>Brand identity</p>
          <p>Editorial systems</p>
        </div>
      </div>
    </section>
  );
}
