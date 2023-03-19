import React from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleNav = () => {
    setIsMobile(!isMobile);
  };

  const link = useRef(null);
  const closeNav = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <motion.div animate={{ x: 0 }} id="navbar">
      <nav>
        <Link href={"#"}>
          <Image src="/logo.png" height={100} width={100} alt="logo" />
        </Link>

        <ul className={isMobile ? "active" : "desktop"} ref={link}>
          <li>
            <Link href={"#about"} onClick={closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link href={"#projects"} onClick={closeNav}>
              Projects
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="mobile-nav" onClick={toggleNav}>
          {isMobile ? (
            <Image width={50} height={50} src="/close.svg" alt="menu" />
          ) : (
            <Image width={50} height={50} src="/open.svg" alt="navbar" />
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
