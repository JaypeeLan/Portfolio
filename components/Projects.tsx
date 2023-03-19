import React from "react";
import ProjectsReuseComp from "./ProjectsReuseComp";

interface Projects {
  src: any;
  projectTitle: string;
  projectText: string;
  github: string;
  live: string;
}

const project: Array<Projects> = [
  {
    src: "",
    projectTitle: "React + Leaflet API",
    projectText:
      "Ip Adress tracker to get a location via its public ip address or domain",
    github: "https://github.com/JaypeeLan/IP-Address-location-Tracker.git",
    live: "https://ip-address-location.netlify.app/",
  },
  {
    src: "",
    projectTitle: "React + Leaflet API",
    projectText:
      "Ip Adress tracker to get a location via its public ip address or domain",
    github: "https://github.com/JaypeeLan/IP-Address-location-Tracker.git",
    live: "https://ip-address-location.netlify.app/",
  },
  {
    src: "",
    projectTitle: "React + Leaflet API",
    projectText:
      "Ip Adress tracker to get a location via its public ip address or domain",
    github: "https://github.com/JaypeeLan/IP-Address-location-Tracker.git",
    live: "https://ip-address-location.netlify.app/",
  },
  {
    src: "",
    projectTitle: "React + Leaflet API",
    projectText:
      "Ip Adress tracker to get a location via its public ip address or domain",
    github: "https://github.com/JaypeeLan/IP-Address-location-Tracker.git",
    live: "https://ip-address-location.netlify.app/",
  },
  {
    src: "",
    projectTitle: "React + Leaflet API",
    projectText:
      "Ip Adress tracker to get a location via its public ip address or domain",
    github: "https://github.com/JaypeeLan/IP-Address-location-Tracker.git",
    live: "https://ip-address-location.netlify.app/",
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h2>Some of my works</h2>
      <div className="project">
        {project.map((project) => (
          <ProjectsReuseComp
            src={project.src}
            projectTitle={project.projectTitle}
            projectText={project.projectText}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
