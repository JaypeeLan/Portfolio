import { motion } from "framer-motion";

export default function Explore() {
  return (
    <div className="about" id="about">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <h1 className="title-text">
          An energetic self-taught and skilled web developer with excellent
          awareness of web design industry trends and issues regarding user
          experience and accessibility. Created websites for clients as well as
          worked on self-initiated projects using the best practices. Outside
          work like being around friends and enjoy video games, learning a new
          language and playing chess, and also work on my CSS.
        </h1>
        <p className="sub-text">
          MY STACK: JAVASCRIPT, REACT.JS, NEXT.JS, TYPESCRIPT, NODE.JS
        </p>
      </motion.div>
    </div>
  );
}
