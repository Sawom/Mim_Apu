import { motion } from "framer-motion";
import React from "react";
import { WhyMeData } from "../constants";

const WhyMe = () => {
  return (
    <div className="border-b font-roboto border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 text-center text-3xl"
      >
        Why Me?
      </motion.h2>
      <div className=" py-8 px-6">
        <h3 className="text-xl font-bold mb-4">
          What Makes My UX Approach Unique:
        </h3>
        <p className="text-lg text-white mb-12">
          I design solutions users love, businesses profit from, and developers
          can actually build – proven across EdTech, ERP, and marketplace
          products.
        </p>
        <div className="space-y-10">
          {WhyMeData.map((item, index) => (
            <div key={index} className="border-l-[1px] border-[#0077FF] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
