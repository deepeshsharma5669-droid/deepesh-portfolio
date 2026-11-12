import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Reveal><WorkGrid /></Reveal>
        <Projects />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <footer className="footer">
        <div className="wrap footer-in">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>All product films use made-up data.</span>
        </div>
      </footer>
    </>
  );
}
