import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-4xl"
      >
        Experience
      </motion.h1>

      {/* details experience */}
      <section className="py-4 px-6 bg-neutral-950 text-white">
        <div className="space-y-10">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-lg text-cyan-400">{job.company}</p>
              <p className="text-lg text-gray-400 mb-4">{job.duration}</p>
              {job.details.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-lg text-neutral-300">
                  {job.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
