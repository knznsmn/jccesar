import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Navigation } from "@/components/Navigation";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import contents from "@/data/contents.json";
import Link from "next/link";

export default function Portfolio() {
  const portfolioNav = contents.navigation.find((item) => item.link === "/portfolio");

  const bannerContent = {
    image: portfolioNav?.view ?? contents.website.metadata.defaultOgImage,
    eyebrow: "...",
    title: portfolioNav?.name ?? "Portfolio",
    text: portfolioNav?.meta ?? contents.website.description,
    ctaLabel: "View portfolio",
    ctaHref: "/portfolio",
  };
  return (
    <div className="siteShell">
      <Navigation />
      <Banner content={bannerContent} />
      <main className="pageContainer">
        <section className="simplePanel">
          <h1 className="panelTitle">Selected Works</h1>
          <p className="panelLead">
            Visual outputs and explorations.
          </p>
          <div className="portfolioList autoFillGrid">
            {contents.portfolio.map((item, index) => (
              <Link className="cardLink autoFillItem" href={item.link} key={item.title}>
                <article
                  className="portfolioItem"
                  data-reveal
                  data-reveal-delay={index * 90}
                >
                  <div className="portfolioPreviewWrap">
                    <PortfolioPreview
                      src={item.preview}
                      alt={`${item.title} preview`}
                      title={item.title}
                      className="portfolioPreview"
                    />
                  </div>
                  <p className="portfolioMeta">Featured Project</p>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="simplePanel">
          <h2 className="panelTitle">Et Cetera</h2>
          <p className="panelLead">Additional selected projects.</p>
          <div className="autoFillGrid">
            {contents.projects.map((project, index) => (
              <Link className="cardLink autoFillItem" href={project.link} key={project.title}>
                <article
                  className="serviceCard"
                  data-reveal
                  data-reveal-delay={index * 90}
                >
                  <div className="portfolioPreviewWrap">
                    <PortfolioPreview
                      src={project.view}
                      alt={`${project.title} preview`}
                      title={project.title}
                      className="portfolioPreview"
                    />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}