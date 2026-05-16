import { motion } from "framer-motion";

function Experience({ currentSection }) {
  return (
    <div className="w-full h-full">

      <motion.div
        className="w-full h-full grid grid-cols-2 grid-rows-2"
        initial={{ x: "100%" }}
        animate={{ x: currentSection === 1 ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >

        {/* CARD 1 */}
        <div className="group relative overflow-hidden border border-white/10">

          {/* IMAGEN */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('/Gemini_Generated_Image_qni7o9qni7o9qni7.png')",
            }}
          />

          {/* GLASS GRIS PREMIUM */}
          <div
            className="
              absolute inset-0 z-10
              bg-zinc-900/40
              backdrop-blur-md
              border border-white/10
              transition-all duration-500
              group-hover:bg-transparent
              group-hover:backdrop-blur-none
            "
          />

          {/* TEXTO */}
          <div
            className="
              relative z-20 h-full flex flex-col
              justify-center items-start text-left px-10
              transition-all duration-500
              group-hover:opacity-0
            "
          >
            <h2 className="text-white text-5xl font-semibold tracking-tight">
              Accenture
            </h2>

            <p className="text-zinc-200 text-base mt-4 max-w-md leading-7">
              Enterprise systems, APIs and scalable backend architecture.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group relative overflow-hidden border border-white/10 bg-zinc-950">

          <div
            className="
              absolute inset-0
              bg-zinc-900/40
              backdrop-blur-md
              border border-white/10
              transition-all duration-500
              group-hover:bg-transparent
              group-hover:backdrop-blur-none
            "
          />

        </div>

        {/* CARD 3 */}
        <div className="group relative overflow-hidden border border-white/10">

          {/* IMAGEN */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage:
                "url('/Gemini_Generated_Image_qg7c0hqg7c0hqg7c.png')",
            }}
          />

          {/* GLASS GRIS PREMIUM */}
          <div
            className="
              absolute inset-0 z-10
              bg-zinc-900/40
              backdrop-blur-md
              border border-white/10
              transition-all duration-500
              group-hover:bg-transparent
              group-hover:backdrop-blur-none
            "
          />

          {/* TEXTO */}
          <div
            className="
              relative z-20 h-full flex flex-col
              justify-center items-start text-left px-10
              transition-all duration-500
              group-hover:opacity-0
            "
          >
            <h2 className="text-white text-5xl font-semibold tracking-tight">
              The Rocket Code
            </h2>

            <p className="text-zinc-200 text-base mt-4 max-w-md leading-7">
              Built modern web apps using React and Spring Boot.
              Focused on performance and scalable architecture.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="group relative overflow-hidden border border-white/10 bg-zinc-950">

          <div
            className="
              absolute inset-0
              bg-zinc-900/40
              backdrop-blur-md
              border border-white/10
              transition-all duration-500
              group-hover:bg-transparent
              group-hover:backdrop-blur-none
            "
          />

        </div>

      </motion.div>

    </div>
  );
}

export default Experience;