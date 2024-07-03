import Link from "next/link";
import { useState } from "react";
import { BsFillTreeFill, BsList, BsX } from "react-icons/bs";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="nav-bar">
        <BsFillTreeFill size="50px" color="#1d3319" />
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/home">
            <span className="nav-link">Home</span>
          </Link>
          <Link href="/explore">
            <span className="nav-link">About</span>
          </Link>
          <Link href="/">
            <span className="nav-link">Projects</span>
          </Link>
          <Link href="/">
            <a className="back-btn">Contact</a>
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
