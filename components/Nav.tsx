import { site } from "@/content/site";

const links = [
  ["Work", "#work"], ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">Deepesh<span>.</span></a>
        <nav aria-label="Primary" className="nav-links">
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <a className="btn btn-sm" href={site.resume} download>Resume</a>
      </div>
    </header>
  );
}
