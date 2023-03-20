import React from "react";
import { motion } from "framer-motion";

interface ProjectDetails {
  src: any;
  projectText: string;
  github: string;
  live: string;
}

const ProjectsReuseComp: React.FC<ProjectDetails> = ({
  src,

  projectText,
  github,
  live,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 20 }}
    >
      <img src={src} width={300} height={150} alt="site snapshot" />
      <div>
        <p>{projectText}</p>
      </div>
      <div>
        <div className="preview_icon">
          <a href={github}>
            <span>github</span>
          </a>

          <a href={live}>
            <span>Live link</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsReuseComp;
