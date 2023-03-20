"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  interface Variants {
    [key: string]: {};
    hideToLeft: {
      opacity: number;
      x: string;
    };
    visible: {
      opacity: number;
      x: number;
      transition: {
        [key: string]: number;
      };
    };
  }
  const containerVariants: Variants = {
    hideToLeft: {
      opacity: 0,
      x: "95vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, delay: 2 },
    },
  };

  return (
    <>
      <motion.section id="about">
        <div className="about_headings">
          <h2>About me</h2>
          <Image src="/avatar.svg" height={100} width={100} alt="avatar" />
        </div>
        <div className="about-me">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.7,
              duration: 8,
              type: "spring",
              stiffness: 10,
            }}
          >
            An energetic self-taught and skilled web developer with excellent
            awareness of web design industry trends and issues regarding user
            experience and accessibility. Created websites for clients as well
            as worked on self-initiated projects using the best practices.
            Outside work like being around friends and enjoy video games,
            learning a new language and playing chess, and also work on my CSS.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 30 }}
          >
            My Stack: JavaScript, React.js, Next.js, TypeScript, Node.js
          </motion.p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
