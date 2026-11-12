import { experience, education } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I&apos;ve worked</h2>
        </div>
        <ol className="timeline">
          <li className="tl-item">
            <div className="tl-meta">
              <p className="period">{experience.period}</p>
              <p className="muted">{experience.location}</p>
            </div>
            <div className="tl-body">
              <h3>{experience.role}</h3>
              <p className="company">{experience.company}</p>
              <ul className="ticks two-col">{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
          <li className="tl-item">
            <div className="tl-meta">
              <p className="period">{education.year}</p>
              <p className="muted">{education.place}</p>
            </div>
            <div className="tl-body">
              <h3>{education.degree}</h3>
              <p className="company">Education</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
