import { motion } from "framer-motion";
import Head from "next/head";

export default function Explore() {
  return (
    <div className="about" id="about">
      <Head>
        <title>About</title>
      </Head>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <h1>About me</h1>
        <h1>
          An energetic and self-taught web developer with a keen awareness of
          industry trends and issues related to user experience and
          accessibility. I have created websites for clients and undertaken
          self-initiated projects, adhering to best practices. Outside of work,
          I enjoy reading technical articles to stay current with the latest
          trends, playing games like Call of Duty, implementing new features in
          my old projects, and exploring fun places.
        </h1>
        <p>MY STACK: JAVASCRIPT, REACT.JS, NEXT.JS, TYPESCRIPT, NODE.JS</p>
      </motion.div>
    </div>
  );
}
