import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Projects />
        <Reveal><Experience /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} Deepesh Sharma</div>
      </footer>
    </>
  );
}
