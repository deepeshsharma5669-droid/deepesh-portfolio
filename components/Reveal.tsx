"use client";
import { useEffect, useRef, useState } from "react";

// Fades a section in once as it scrolls into view. Content is visible without JS and
// for users who prefer reduced motion.
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 6000); // never leave content hidden
    return () => { io.disconnect(); window.clearTimeout(fallback); };
  }, []);

  return <div ref={ref} className={armed ? (shown ? "reveal in" : "reveal") : undefined}>{children}</div>;
}
