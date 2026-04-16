import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="heroContent">
        <p className="heroEyebrow">Independent Graphic Designer</p>
        <h1 id="hero-title" className="heroHeading">
          Visual stories shaped with clarity, rhythm, and quiet confidence.
        </h1>
        <p className="heroLead">
          I design brand systems, editorial layouts, and campaign visuals that feel
          modern, timeless, and unmistakably human.
        </p>
        <div className="heroActions">
          <Link className="heroPrimary" href="/portfolio">
            View portfolio
          </Link>
          <Link className="heroSecondary" href="/about">
            Read profile
          </Link>
        </div>
        <p className="heroMeta">Available for freelance work in 2026.</p>
      </div>

      <div className="heroVisual" aria-hidden="true">
        <div className="visualOrb visualOrbA" />
        <div className="visualOrb visualOrbB" />
        <div className="visualOrb visualOrbC" />
        <div className="visualGrid" />
        <div className="visualCard">
          <p>Art direction</p>
          <p>Brand identity</p>
          <p>Editorial systems</p>
        </div>
      </div>
    </section>
  );
}
