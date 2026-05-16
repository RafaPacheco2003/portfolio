import "./App.css";
import Hero from "./features/hero/Hero";
import Experience from "./features/experience/Experience";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = 2;
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      setCurrentSection((prev) => {
        const next = Math.max(0, Math.min(sections - 1, prev + direction));
        if (next === prev) return prev;

        isAnimating.current = true;
        setTimeout(() => {
          isAnimating.current = false;
        }, 900);

        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="relative bg-black h-screen overflow-hidden">

      {/* NAV */}
      <nav className="fixed top-16 left-10 z-50">
        <ul className="text-white flex gap-10 font-medium">
          <li className="group relative cursor-pointer">
            About
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer">
            Skills
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </li>
          <li className="group relative cursor-pointer">
            Projects
            <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>
      </nav>

      {/* SECCIONES */}
      <div className="relative w-full h-screen overflow-hidden">

        {/* HERO */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform" }}
          initial={{ x: "0%" }}
          animate={{ x: currentSection === 0 ? "0%" : "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <Hero />
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform" }}
          initial={{ x: "100%" }}
          animate={{ x: currentSection === 1 ? "0%" : "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <Experience currentSection={currentSection} />
        </motion.div>

      </div>

      {/* INDICADORES */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {Array.from({ length: sections }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSection(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </main>
  );
}

export default App;