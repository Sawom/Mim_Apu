import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="pb-10 font-roboto">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl "
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter  ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Phone: {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {" "}
          Address: {CONTACT.address}
        </motion.p>
        <a href="mailto:asawom250@gmail.com">Email: {CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
