import { about, principles } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <p className="eyebrow">About</p>
        <h2>Analytics that people actually use</h2>
        <div className="about-grid">
          <div className="prose">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.title}><strong>{p.title}</strong><span>{p.text}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
