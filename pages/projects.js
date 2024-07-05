import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ProjectsMobile from "../components/mobile";
import Card from "../components/card";
import { PROJECTS } from "../data";

export default function Projects() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
        >
          <h1>Projects</h1>
          {/* <div className="project">
            {PROJECTS.map((project) => (
              <Card
                key={project.src}
                src={project.src}
                projectText={project.projectText}
                github={project.github}
                live={project.live}
              />
            ))}
          </div> */}
          <ProjectsMobile />
        </motion.div>
      </div>
    </div>
  );
}
