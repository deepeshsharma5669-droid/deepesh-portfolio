import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-card">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s talk</h2>
          <p className="lead">Open to Data Analyst, Product Analyst and Business Analyst roles. The quickest way to reach me is email.</p>
          <div className="cta">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>{site.email}</a>
            <a className="btn" href={site.resume} download>Download resume</a>
          </div>
          <div className="social">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
