import { projects, type Project } from "@/content/site";
import Flow, { type FlowStep } from "./Flow";
import Film from "./Film";
import Reveal from "./Reveal";

const flows: Record<string, FlowStep[]> = {
  dashboard: [
    { title: "Business data", sub: "Revenue, subscriptions, usage, support, engineering" },
    { title: "Supabase / Postgres", sub: "SQL views and functions behind each metric" },
    { title: "Streamlit dashboard", sub: "Period-vs-period comparison, 100+ metrics" },
    { title: "Role-based access", sub: "Product, Support, Admin" },
  ],
  pipeline: [
    { title: "Google Sheets", sub: "Business data kept by teams" },
    { title: "Two-stage sync", sub: "Google Apps Script" },
    { title: "Validation & conflict handling", sub: "Upsert / append, key conflicts, date normalisation" },
    { title: "Supabase", sub: "7 tables, 40,000+ records" },
  ],
  crm: [
    { title: "Product & subscription data", sub: "Activity and plans" },
    { title: "Segmentation rules", sub: "Never engaged · Gone quiet · Returned" },
    { title: "Follow-up & attribution", sub: "Fair credit for shared follow-ups" },
    { title: "Email campaigns", sub: "Templated, group-level" },
  ],
  pmt: [
    { title: "Discovery", sub: "2,600+ records · stakeholder interviews" },
    { title: "Workflow & schema design", sub: "Approval stages, relational model" },
    { title: "Multi-role tool", sub: "Admin · Manager · Member · Client" },
    { title: "QA cycles", sub: "Dozens of build-and-test rounds" },
  ],
};

function Ticks({ items }: { items: string[] }) {
  return <ul className="ticks">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

function CaseStudy({ p, n }: { p: Project; n: number }) {
  return (
    <article id={p.id} className="cs">
      <header className="cs-head">
        <p className="eyebrow">Case study {String(n).padStart(2, "0")} · {p.kind}</p>
        <h3>{p.title}</h3>
        <p className="lead">{p.overview}</p>
        <ul className="chips" aria-label="Technology stack">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      </header>

      {p.film ? <Film film={{ ...p.film, title: p.title }} /> : <Flow steps={flows[p.id]} label={`${p.title}: how it fits together`} />}

      <div className="cs-summary">
        <div className="cs-col">
          <h4><span>01</span> The problem</h4>
          <p>{p.problem}</p>
        </div>
        <div className="cs-col">
          <h4><span>02</span> What I did</h4>
          <Ticks items={p.role} />
        </div>
        <div className="cs-col cs-result">
          <h4><span>03</span> The result</h4>
          <Ticks items={p.outcomes} />
        </div>
      </div>

      <details className="cs-more">
        <summary>Full details: how it works and key features</summary>
        <div className="cs-more-grid">
          <div><h4>How it works</h4><Ticks items={p.approach} /></div>
          <div><h4>Key features</h4><Ticks items={p.features} /></div>
        </div>
        {p.film && <Flow steps={flows[p.id]} label={`${p.title}: how it fits together`} />}
      </details>

      {p.links.length > 0 && (
        <div className="cs-links">
          {p.links.map((l) => (
            <a key={l.href} className="btn btn-sm" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section alt" aria-label="Case studies">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Case studies</p>
          <h2>How each one was built</h2>
        </div>
        {projects.map((p, i) => (
          <Reveal key={p.id}><CaseStudy p={p} n={i + 1} /></Reveal>
        ))}
      </div>
    </section>
  );
}
