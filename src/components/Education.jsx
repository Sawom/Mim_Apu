import { motion } from "framer-motion";
import React from "react";
import { EDUCATION } from "../constants";
import "../css/album.css";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 px-5">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 text-center text-4xl"
      >
        Education
      </motion.h2>

      <section className="py-12 px-6 bg-neutral-950 text-white">
        <h2 className="text-2xl font-semibold mb-6 border-b border-neutral-700 pb-2">
          Education
        </h2>
        <div className="space-y-10">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-6">
              <h3 className="text-2xl font-medium">{edu.degree}</h3>
              <p className="text-lg text-cyan-400">{edu.institution}</p>
              <p className="text-lg text-gray-400">{edu.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
