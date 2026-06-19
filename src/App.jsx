import "./App.css";
import Hero from "./features/hero/Hero";
import Experience from "./features/experience/Experience";
import Projects from "./features/projects/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const SECTIONS = 3;
const transition = { duration: 0.65, ease: [0.25, 0, 0.25, 1] };

const buildVariants = (from, to) => {
  const forward = to > from;
  const horizontal =
    (from === 0 && to === 1) || (from === 1 && to === 0);

  if (horizontal) {
    return {
      initial: { x: forward ? "100%" : "-100%", y: 0 },
      animate: { x: 0, y: 0 },
      exit:    { x: forward ? "-100%" : "100%", y: 0 },
    };
  }

  return {
    initial: { y: forward ? "100%" : "-100%", x: 0 },
    animate: { y: 0, x: 0 },
    exit:    { y: forward ? "-100%" : "100%", x: 0 },
  };
};

function App() {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  const [variants, setVariants] = useState(buildVariants(0, 1));

  useEffect(() => {
    const images = [
      "/hero-me.jpeg",
      "/accentureExp.png",
      "/megasurExp.png",
      "/rocketExp.png",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const goTo = useCallback((cur, next) => {
    if (locked) return;
    if (next < 0 || next >= SECTIONS) return;
    if (next === cur) return;

    setLocked(true);
    setVariants(buildVariants(cur, next));
    setCurrent(next);
    setTimeout(() => setLocked(false), 750);
  }, [locked]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      goTo(current, current + (e.deltaY > 0 ? 1 : -1));
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 40) goTo(current, current + (diff > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current, goTo]);

  const components = [
    <Hero key="hero" />,
    <Experience key="experience" currentSection={current} />,
    <Projects key="projects" />,
  ];

  return (
    <main className="relative bg-black h-screen overflow-hidden">

      {/* NAV */}
      <nav className="fixed top-16 left-10 z-50">
        <ul className="text-white flex gap-10 font-medium">
          {["About", "Skills", "Projects"].map((label, i) => (
            <li
              key={label}
              className="group relative cursor-pointer"
              onClick={() => goTo(current, i)}
            >
              {label}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>

      {/* SECCIONES */}
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current}
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={transition}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: "transform" }}
          >
            {components[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* INDICADORES */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {Array.from({ length: SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(current, i)}
            aria-label={`Ir a sección ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </main>
  );
}

export default App;