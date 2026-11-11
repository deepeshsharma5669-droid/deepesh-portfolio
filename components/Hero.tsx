import { site } from "@/content/site";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="eyebrow">{site.positioning}</p>
          <h1>{site.name}</h1>
          <p className="role">{site.title}</p>
          <p className="tagline">&ldquo;{site.tagline}&rdquo;</p>
          <p className="lead">{site.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn" href={site.resume} download>Download Resume</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
          <div className="social">
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <HeroGraphic />
      </div>
    </section>
  );
}
