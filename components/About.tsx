import { about, howIWork, principles } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Analytics that people actually use</h2>
        </div>
        <div className="about-grid">
          <div className="prose">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <aside className="how-card" aria-labelledby="how-title">
            <p className="eyebrow">How I work</p>
            <h3 id="how-title">{howIWork.title}</h3>
            <p>{howIWork.text}</p>
          </aside>
        </div>
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.title}>
              <span className="p-num">{String(i + 1).padStart(2, "0")}</span>
              <strong>{p.title}</strong>
              <span>{p.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
