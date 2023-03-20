import React from "react";

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
    <div>
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
    </div>
  );
};

export default ProjectsReuseComp;
