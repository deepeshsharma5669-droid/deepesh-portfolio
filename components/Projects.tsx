import { projects, type Project } from "@/content/site";
import Flow, { type FlowStep } from "./Flow";
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

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="cs-block">
      <h4>{title}</h4>
      <ul className="ticks">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
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

      <div className="cs-grid">
        <div className="cs-block wide">
          <h4>The problem</h4>
          <p>{p.problem}</p>
        </div>
        <List title="My role" items={p.role} />
        <List title="How it works" items={p.approach} />
        <List title="Key features" items={p.features} />
        <List title="Outcomes" items={p.outcomes} />
      </div>

      <Flow steps={flows[p.id]} label={`${p.title} — how it fits together`} />

      <footer className="cs-foot">
        <p className="ai-note"><strong>How it was built:</strong> {p.aiNote}</p>
        {p.links.length > 0 && (
          <div className="cs-links">
            {p.links.map((l) => (
              <a key={l.href} className="btn btn-sm" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
            ))}
          </div>
        )}
      </footer>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <p className="eyebrow">Featured projects</p>
        <h2>Problems I&apos;ve solved</h2>
        <p className="lead narrow">
          Four internal tools built at TheFinPedia. Product screenshots contain company data, so each project is
          shown as a case study with a conceptual diagram instead.
        </p>
        {projects.map((p, i) => (
          <Reveal key={p.id}><CaseStudy p={p} n={i + 1} /></Reveal>
        ))}
      </div>
    </section>
  );
}
