import { projects, site, stats } from "@/content/site";

export default function Hero() {
  const filmed = projects.filter((p) => p.film);
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" aria-hidden="true" /> Open to Data, Product &amp; Business Analyst roles</p>
          <h1>{site.name}</h1>
          <p className="role">{site.title}</p>
          <p className="lead">{site.intro}</p>
          <div className="cta">
            <a className="btn btn-primary" href="#work">View my work</a>
            <a className="btn" href={site.resume} download>Download resume</a>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>Email me</a>
          </div>
        </div>

        <div className="hero-stack" aria-label="Product films">
          {filmed.map((p, i) => (
            <a key={p.id} href={`#${p.id}`} className={`stack-card s${i}`} aria-label={`${p.title}: watch the product film`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.film!.poster} alt="" width={1280} height={720} loading={i === 0 ? "eager" : "lazy"} />
              <span className="stack-play" aria-hidden="true">▶</span>
            </a>
          ))}
          <p className="stack-cap">Real apps, recorded on mock data</p>
        </div>
      </div>

      <div className="wrap">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <a href={`#${s.ref}`}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
