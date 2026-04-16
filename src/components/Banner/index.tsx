import styles from "./Banner.module.css";
import Link from "next/link";
import Image from "next/image";

type BannerContent = {
    image?: string;
    title: string;
    text: string;
    eyebrow?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

type BannerProps = {
    content: BannerContent;
};

export function Banner({ content }: BannerProps) {
    const image = content.image;

    return (
        <section
            className={`${styles.banner} ${!image ? styles.bannerNoImage : ""}`}
            aria-label="Hero banner"
        >
            <div className={`${styles.textColumn} ${!image ? styles.textColumnCentered : ""}`}>
                {content.eyebrow ? <p className={styles.eyebrow}>{content.eyebrow}</p> : null}
                <h1 className={styles.title}>{content.title}</h1>
                <p className={styles.text}>{content.text}</p>
                {!image && content.ctaLabel && content.ctaHref ? (
                    <Link className={styles.link} href={content.ctaHref}>
                        {content.ctaLabel}
                    </Link>
                ) : null}
            </div>
            {image ? (
                <div className={styles.imageColumn} aria-hidden="true">
                    <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(max-width: 660px) 100vw, 50vw"
                        className={styles.image}
                        priority
                    />
                </div>
            ) : null}
        </section>
    );
}