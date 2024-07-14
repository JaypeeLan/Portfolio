import { motion } from "framer-motion";
import ProjectsMobile from "../components/mobile";
import Card from "../components/card";
import { PROJECTS } from "../data";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
};

export default function Projects() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 760;

  return (
    <div className="projects-container">
      <div className="about" id="about">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="mobile-project-page"
        >
          <h1>Projects</h1>
          {isMobile ? (
            <>
              <ProjectsMobile />
            </>
          ) : (
            <div className="project">
              {PROJECTS.map((project) => (
                <Card
                  key={project.src}
                  src={project.src}
                  projectText={project.projectText}
                  github={project.github}
                  live={project.live}
                />
              ))}
            </div>
          )}
          <p className="project-text">
            Projects were built with NextJs, React and Typescript{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
