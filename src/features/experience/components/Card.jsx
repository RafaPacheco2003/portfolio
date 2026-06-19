import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.35 + i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hidden_out: (i) => ({
    opacity: 0,
    scale: 0.95,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
    },
  }),
};

function Card({ index, image, title, description, isVisible, dark }) {
  const reverseIndex = 3 - index;

  return (
    <motion.div
      custom={isVisible ? index : reverseIndex}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden_out"}
      className={`group relative overflow-hidden border border-white/10 cursor-pointer ${
        !isVisible ? "pointer-events-none" : ""
      }`}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}

      <div
        className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 ${
          dark ? "bg-zinc-950/85" : "bg-zinc-900/75"
        }`}
      />

      {title && (
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-10 transition-opacity duration-500 group-hover:opacity-0">
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="text-zinc-300 text-sm sm:text-base mt-3 sm:mt-6 max-w-md leading-6 sm:leading-7">{description}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default Card;