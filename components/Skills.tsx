import { skillGroups } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2>What I work with</h2>
        </div>
        <div className="skills">
          {skillGroups.map((g) => (
            <div key={g.name} className="skill-group">
              <h3>{g.name}</h3>
              <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
