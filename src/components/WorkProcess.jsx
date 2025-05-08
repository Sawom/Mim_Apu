import { motion } from "framer-motion";
import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBolt, FaMobileAlt, FaPaperPlane, FaUser } from "react-icons/fa";

const processSteps = [
  {
    icon: <FaUser size={24} />,
    title: "User Research",
    description:
      "User research is the systematic investigation of users and their requirements",
  },
  {
    icon: <FaPaperPlane size={24} />,
    title: "User Journey",
    description:
      "A user journey is a path a user may take to reach their goal when using a particular product",
  },
  {
    icon: <FaBolt size={24} />,
    title: "Wireframing",
    description:
      "Wireframe is a visual representation of a user interface, stripped of any visual design or branding elements",
  },
  {
    icon: <FaUser size={24} />,
    title: "Usability Testing",
    description:
      "Usability testing is the practice of testing how easy a design is to use on a group of representative users",
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: "UI Design",
    description:
      "User interfaces are made after the testing. It is the access points where users interact with designs",
  },
  {
    icon: <BsFillLightningChargeFill size={24} />,
    title: "Developer Handoff",
    description:
      "This is the stage when the UI is at a point where the developer can finally start implementing it in pixel perfect code",
  },
];

const WorkProcess = () => {
  return (
    <div className="border-b font-roboto border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-10 text-center text-4xl"
      >
        Working Process
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <section className="py-16 px-6  text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className=" gap-4">
                <div
                  className="bg-cyan-600 p-3 rounded-md mb-4"
                  style={{ width: "50px" }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkProcess;
