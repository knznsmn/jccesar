import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import contents from "@/data/contents.json";

export default function Home() {
  const bannerContent = {
    eyebrow: contents.website.tagline,
    title: contents.website.author.name,
    text: contents.navigation[0]?.meta ?? contents.website.description,
    ctaLabel: "View portfolio",
    ctaHref: "/portfolio",
  };

  return (
    <div className="siteShell">
      <Navigation />
      <Banner content={bannerContent} />
      <main className="pageContainer">
        <Hero />

        <section className="workSection" aria-labelledby="selected-work-title">
          <div className="sectionHeader">
            <h2 id="selected-work-title" className="sectionTitle">
              Selected work
            </h2>
            <p className="sectionLead">Minimal forms. Strong art direction.</p>
          </div>
          <div className="workGrid">
            {contents.portfolio.slice(0, 3).map((item, index) => (
              <article
                className="workCard"
                key={item.title}
                data-reveal
                data-reveal-delay={index * 90}
              >
                <p className="workTag">Case Study</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="inlineLink" href={item.link}>
                  Explore
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="statementBand" aria-label="Design statement">
          <p>
            I build design systems where composition, negative space, and color carry
            meaning before words do.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
