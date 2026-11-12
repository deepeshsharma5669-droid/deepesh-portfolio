import { projects } from "@/content/site";

export default function WorkGrid() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Four internal tools, one job: better decisions</h2>
          <p className="lead narrow">
            Built at TheFinPedia. The real products hold company data, so each one is shown as a short film of the real
            app running on made-up data.
          </p>
        </div>
        <ol className="work-grid">
          {projects.map((p, i) => (
            <li key={p.id}>
              <a className="work-card" href={`#${p.id}`}>
                <div className="work-media">
                  {p.film ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.film.poster} alt="" width={1280} height={720} loading="lazy" />
                  ) : (
                    <div className="work-media-flow" aria-hidden="true">
                      <span>Google Sheets</span><i /><span>Apps Script</span><i /><span>Supabase</span>
                    </div>
                  )}
                  <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="work-body">
                  <p className="kind">{p.kind}</p>
                  <h3>{p.title}</h3>
                  <p>{p.headline}</p>
                  <span className="work-more">{p.film ? "Watch & read the case study" : "Read the case study"} →</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
