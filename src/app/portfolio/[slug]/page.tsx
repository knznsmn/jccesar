import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import contents from "@/data/contents.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSlugFromLink(link: string) {
  return link.split("/").filter(Boolean).at(-1) ?? "";
}

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

  return (
    <div className="siteShell">
      <Navigation />
      <main className="pageContainer">
        <section className="simplePanel portfolioDetail" data-reveal>
          <Link className="portfolioBackLink" href="/portfolio">
            Back to portfolio
          </Link>
          <header className="portfolioDetailHeader">
            <p className="portfolioMeta">Case Study</p>
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
      </main>
      <Footer />
    </div>
  );
}
