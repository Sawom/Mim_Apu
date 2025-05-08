import { motion } from "framer-motion";
import { SKILLS } from "../constants";

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
      <div className=" py-16 px-6">
        <h2 className="text-3xl font-light text-gray-300 text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {SKILLS.map((section, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {section.category}
              </h3>
              <ul className="text-gray-400 space-y-2">
                {section.skills.map((skill, idx) => (
                  <li key={idx} className="list-disc list-inside">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
