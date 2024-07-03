import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillTreeFill } from "react-icons/bs";

export default function Explore() {
  return (
    <>
      <Hero />
    </>
  );
}

const Hero = () => {
  return (
    <div className="explore-page-hero">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
        className="header-content"
      >
        <div>
          <BsFillTreeFill size="35px" color="#1d3319" />
        </div>
        <h1 className="title-text"> Parks</h1>
        <p className="sub-text">
          Explore Nation Parks is the countries leader for nation park tours.
          Make your vacation great with one of our amazing tour guides!
        </p>
        <Link href="/">
          <a className="back-btn">View Our Parks</a>
        </Link>
      </motion.div>
    </div>
  );
};
