import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ backgroundImage: "url('/hero-me.jpeg')" }}
      className="w-full h-full bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full flex items-center justify-center bg-black/50 px-6">
        <div className="text-center w-full max-w-3xl">
          <p className="text-gray-300 text-xs uppercase tracking-[0.3em] mb-4">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 2000,
                "Java Developer", 2000,
                "Spring Boot Developer", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight">
            Rodrigo Rafael<br />Chi Pacheco
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-6 max-w-2xl mx-auto leading-7">
            Passionate about building scalable and modern web applications
            using Java, Spring Boot, React, and SQL databases.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;