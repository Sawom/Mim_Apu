import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const iconvarriant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <section className="py-5 px-4 bg-neutral-950 text-white">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:text-lg text-sm text-neutral-300">
            {SKILLS.map((skill, index) => (
              <li
                key={index}
                className="bg-neutral-800 px-4 py-2 rounded hover:bg-cyan-700 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Tech;
