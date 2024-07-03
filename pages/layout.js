import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="nav-bar">
        <Link href={"/"}>
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/">
            <span className="nav-link">Home</span>
          </Link>
          <Link href="/about">
            <span className="nav-link">About</span>
          </Link>
          <Link href="/projects">
            <span className="nav-link">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="nav-link">Contact</span>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <BsX size="30px" /> : <BsList size="30px" />}
        </div>
      </div>

      <main className="main">{children}</main>
    </>
  );
}
