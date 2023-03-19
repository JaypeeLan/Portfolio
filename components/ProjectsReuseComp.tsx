import React from "react";

interface ProjectDetails {
  src: any;
  projectTitle: string;
  projectText: string;
  github: string;
  live: string;
}

const ProjectsReuseComp: React.FC<ProjectDetails> = ({
  src,
  projectTitle,
  projectText,
  github,
  live,
}) => {
  return (
    <div>
      <img src={src} alt="site snapshot" />
      <div>
        <div>{projectTitle} </div>
        <div>{projectText}</div>
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
    </div>
  );
};

export default ProjectsReuseComp;
