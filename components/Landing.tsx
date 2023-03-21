import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.section id="home">
      <div id="landing-page">
        <motion.p
          className="hi"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 20 }}
        >
          Hi, <span>I am</span>
        </motion.p>
        <motion.p
          className="myName"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2.7,
            type: "spring",
            stiffness: 60,
          }}
        >
          Laniran JohnPaul
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.9, type: "spring", stiffness: 30 }}
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
