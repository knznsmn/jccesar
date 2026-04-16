import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import contents from "@/data/contents.json";

export default function About() {
  const bannerContent = {
    image: contents.navigation[2]?.view ?? contents.website.metadata.defaultOgImage,
    eyebrow: "...",
    title: "bio",
    text: contents.navigation[2]?.meta ?? contents.website.description,
    ctaLabel: "View portfolio",
    ctaHref: "/portfolio",
  };
  return (
    <div className="siteShell">
      <Navigation />
      <Banner content={bannerContent} />
      <main className="pageContainer">
        <section className="simplePanel">
          <h1 className="panelTitle">About Me</h1>
          <p className="panelLead">
            I am Julius Cinco Cesar, shaping visual systems and stories for the digital-first landscape.
          </p>
          <div className="serviceGrid aboutSkillsGrid">
            {contents.skills.map((skill, index) => (
              <article
                className="serviceCard"
                key={skill.title}
                data-reveal
                data-reveal-delay={index * 90}
              >
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}