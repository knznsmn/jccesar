import type { Metadata } from "next";
import { Case } from "@/components/Case";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import contents from "@/data/contents.json";
import { getSlugFromLink } from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type SectionAlign = "left" | "right" | "center";

const normalizeAlign = (align?: string): SectionAlign => {
  if (align === "left" || align === "right" || align === "center") {
    return align;
  }

  return "right";
};

export function generateStaticParams() {
  return contents.portfolio.map((item) => ({
    slug: getSlugFromLink(item.link),
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = contents.portfolio.find((entry) => getSlugFromLink(entry.link) === slug);

  if (!item) {
    return {
      title: "Project Not Found",
      description: contents.website.metadata.defaultDescription,
    };
  }

  const title = item.metadata?.title ?? item.title;
  const description = item.metadata?.description ?? item.description;
  const ogImage = item.metadata?.ogImage ?? item.preview ?? contents.website.metadata.defaultOgImage;

  return {
    title,
    description,
    alternates: {
      canonical: item.link,
    },
    openGraph: {
      title,
      description,
      url: item.link,
      siteName: contents.website.name,
      images: [{ url: ogImage }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PortfolioDetail({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const item = contents.portfolio.find((entry) => getSlugFromLink(entry.link) === slug);

  if (!item) {
    notFound();
  }

  const sections = {
    challenge: item.sections?.challenge ?? {
      text: item.description,
      image: item.preview,
      align: "right" as const,
    },
    strategy: item.sections?.strategy ?? {
      text: item.description,
      image: item.preview,
      align: "left" as const,
    },
    execution: item.sections?.execution ?? {
      text: item.description,
      image: item.preview,
      align: "center" as const,
    },
    result: item.sections?.result ?? {
      text: item.description,
      image: item.preview,
      align: "right" as const,
    },
  };

  const caseSections = {
    challenge: {
      ...sections.challenge,
      align: normalizeAlign(sections.challenge.align),
    },
    strategy: {
      ...sections.strategy,
      align: normalizeAlign(sections.strategy.align),
    },
    execution: {
      ...sections.execution,
      align: normalizeAlign(sections.execution.align),
    },
    result: {
      ...sections.result,
      align: normalizeAlign(sections.result.align),
    },
  };

  return (
    <div className="siteShell">
      <Navigation />
      <main className="pageContainer">
        <section className="simplePanel portfolioDetail" data-reveal>
          <Link className="portfolioBackLink" href="/portfolio">
            Back to portfolio
          </Link>
          <header className="portfolioDetailHeader">
            <p className="portfolioMeta">The Archive</p>
            <h1 className="panelTitle">{item.title}</h1>
          </header>
          <div className="portfolioDetailPreview">
            <PortfolioPreview
              src={item.preview}
              alt={`${item.title} preview`}
              title={item.title}
              className="portfolioPreview"
            />
          </div>
          <div className="portfolioDetailBody">
            <p>{item.description}</p>
          </div>
        </section>

        {Object.entries(caseSections).map(([key, section]) => (
          <Case
            key={key}
            title={`The ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            sectionKey={key}
            image={section.image}
            align={section.align}
          >
            <p>{section.text}</p>
          </Case>
        ))}
      </main>
      <Footer />
    </div>
  );
}
