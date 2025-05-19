import { motion } from "framer-motion";
import hand from "../images/app/hand.svg";

const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const handleContact = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mimtoos15@gmail.com",
      "_blank"
    );
  };

  return (
    <div className="w-full font-roboto  border-b border-neutral-800 pb-16 lg:mb-10 min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="flex flex-col items-start md:items-start lg:items-start">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 tracking-tight lg:mt-16 "
            >
              <p className="mb-2 flex mt-4  ">
                <img src={hand} className="hand " alt="" />
                <span className="mx-3 lg:text-6xl font-bold md:text-5xl text-5xl">
                  HELLO,
                </span>
              </p>
              <p className="mb-2 lg:text-6xl font-bold md:text-5xl text-5xl ">
                I AM YOUR UX
              </p>
              <p className="mb-2 lg:text-6xl font-bold md:text-5xl text-5xl ">
                CONSULTANT
              </p>
            </motion.h1>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mb-6 tracking-tighter w-100"
            >
              <p>
                <span className="typography-roboto2">
                  I am Jannatul Ferdousi,Ux lead @ Honeybee IOT Limited. I
                  design digital experiences that drive growth—from the
                </span>
                <span className="typography-roboto mx-1">
                  Buddybee website & APP
                </span>
                <span className="mx-1 typography-roboto2"> to </span>
                <span className="typography-roboto">
                  Nectar Beezness App (ERP Solution),
                </span>
                <span className="typography-roboto2 mx-1">an </span>
                <span className="typography-roboto">
                  AI recruitment Job APP, Netzero app(WIP) &
                </span>
                <span className="typography-roboto2 mx-2">
                  and brand identities for startups and enterprises.I bridge
                </span>
                <span className="typography-roboto">vision and success</span>
                <span className="typography-roboto2 mx-1">
                  by designing visually powerful products —where
                </span>
                <span className="typography-roboto mx-1">user love</span>
                <span className="typography-roboto2 mx-1">meets </span>
                <span className="typography-roboto">business results.</span>
              </p>
            </motion.p>
            <button
              onClick={handleContact}
              className="bg-[#0077FF] text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
