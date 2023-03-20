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
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hideToLeft"
      animate="visible"
    >
      <div id="landing-page">
        <p className="hi">
          Hi, <span>I am</span>
        </p>
        <p className="myName">Laniran JohnPaul</p>
        <motion.p
          variants={paragraphVariants}
          initial="hideToLeft"
          animate="visible"
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
