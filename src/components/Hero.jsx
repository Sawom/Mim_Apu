import { motion } from "framer-motion";
import { HERO_CONTENT, HOW_I_HELP } from "../constants/index";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="w-full border-b border-neutral-800 pb-16 lg:mb-10 px-4">
      <div className="flex flex-wrap w-full">
        <div className="w-full  ">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 md:text-3xl text-2xl font-thin tracking-tight lg:mt-16 lg:text-4xl"
            >
              Hello, I am Jannatul Ferdousi; your UX Designer
            </motion.h1>
            {/* <motion.span variants={Container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Web Developer</motion.span> */}
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2  tracking-tighter w-100 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 py-8 tracking-tighter w-100 font-light"
            >
              <p className="mb-4 text-2xl font-bold">How can I help?</p>
              <div className="space-y-4 text-base leading-relaxed">
                {HOW_I_HELP.map((point, index) => (
                  <p key={index} className="flex items-start">
                    {point}
                  </p>
                ))}
              </div>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
