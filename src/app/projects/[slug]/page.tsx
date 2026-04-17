import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import contents from "@/data/contents.json";
import { getSlugFromLink } from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return contents.projects.map((item) => ({
    slug: getSlugFromLink(item.link),
  }));
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = contents.projects.find((entry) => getSlugFromLink(entry.link) === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="siteShell">
      <Navigation />
      <main className="pageContainer">
        <section className="simplePanel portfolioDetail" data-reveal>
          <Link className="portfolioBackLink" href="/projects">
            Back to projects
          </Link>
          <header className="portfolioDetailHeader">
            <p className="portfolioMeta">Project</p>
            <h1 className="panelTitle">{project.title}</h1>
          </header>
          <div className="portfolioDetailBody">
            <p>{project.description}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
