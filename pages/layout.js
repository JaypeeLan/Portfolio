import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "react-feather";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return router.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="nav-bar">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/">
            <span className={getLinkClass("/")}>Home</span>
          </Link>
          <Link href="/about">
            <span className={getLinkClass("/about")}>About</span>
          </Link>
          <Link href="/projects">
            <span className={getLinkClass("/projects")}>Projects</span>
          </Link>
          <Link href="/contact">
            <span className={getLinkClass("/contact")}>Contact</span>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size="30px" /> : <Menu size="30px" />}
        </div>
      </div>

      <main className="main">{children}</main>
    </>
  );
}
