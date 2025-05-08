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
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2  tracking-tighter w-100 font-light"
            >
              <p className=" text-lg font-bold mb-4">{HERO_CONTENT}</p>
              <p className="  text-gray-400">
                I specialize in transforming complex workflows into intuitive
                digital experiences. My toolkit includes end-to-end UX design
                <b className="text-white mx-2">
                  (research → prototyping → testing)
                </b>
                , UI design in <b className="text-white">Figma</b> , and basic
                front-end knowledge (HTML/CSS) to ensure feasible,
                developer-friendly designs. I’ve designed for
                <b className="text-white mx-2">EdTech</b>,
                <b className="text-white mx-2">ERP systems</b>,
                <b className="text-white mx-2">AI recruitment</b>, and
                <b className="text-white mx-2">sustainable energy</b> , always
                prioritizing usability and business goals."
              </p>
            </motion.p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
