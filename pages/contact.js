import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="about" id="contact">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <h1 className="title-text"> contact</h1>
        <p className="sub-text">
          Explore Nation Parks is the countries leader for nation park tours.
          Make your vacation great with one of our amazing tour guides!
        </p>
      </motion.div>
    </div>
  );
}
