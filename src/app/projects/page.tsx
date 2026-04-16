import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import contents from "@/data/contents.json";
import Link from "next/link";

export default function Projects() {
  const bannerContent = {
    image: contents.portfolio[0]?.preview ?? contents.website.metadata.defaultOgImage,
    eyebrow: "...",
    title: contents.navigation[1].name,
    text: contents.navigation[1].meta,
    ctaLabel: "View portfolio",
    ctaHref: "/portfolio",
  };

  return (
    <div className="siteShell">
      <Navigation />
      <Banner content={bannerContent} />
      <main className="pageContainer">
        <section className="simplePanel">
          <h1 className="panelTitle">Projects</h1>
          <p className="panelLead">
            Selected design projects showing identity systems, creative direction, and visual problem solving.
          </p>
          <div className="serviceGrid">
            {contents.projects.map((project, index) => (
              <article
                className="serviceCard"
                key={project.title}
                data-reveal
                data-reveal-delay={index * 90}
              >
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link className="inlineLink" href={project.link}>
                  View project
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}