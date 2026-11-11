import { experience, education } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="wrap">
        <p className="eyebrow">Experience</p>
        <h2>Where I&apos;ve worked</h2>
        <div className="job">
          <div className="job-head">
            <div>
              <h3>{experience.role}</h3>
              <p className="muted">{experience.company} · {experience.location}</p>
            </div>
            <p className="period">{experience.period}</p>
          </div>
          <ul className="ticks">{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="edu">
          <p className="eyebrow">Education</p>
          <h3>{education.degree}</h3>
          <p className="muted">{education.place} · {education.year}</p>
        </div>
      </div>
    </section>
  );
}
