import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hideToLeft: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, type: "spring" },
  },
};

const paragraphVariants = {
  hideToLeft: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      type: "spring",
      stiffness: 50,
    },
  },
};

const Landing = () => {
  return (
    <motion.section id="home">
      <div id="landing-page">
        <motion.p
          className="hi"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 50 }}
        >
          Hi, <span>I am</span>
        </motion.p>
        <motion.p
          className="myName"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,

            type: "spring",
            stiffness: 100,
          }}
        >
          Laniran JohnPaul
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 30 }}
        >
          A frontend developer interested in bringing your ideas to life,
          solving real life problems and providing new ideas to your
          organisation using latest technologies.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="/laniran_johnpaul_CV.pdf"
          target="_blank"
          className="download"
          download="Laniran_johnpaul_CV"
        >
          RESUME
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Landing;
