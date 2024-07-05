import React from "react";
import ProjectsReuseComp from "./ProjectsReuseComp";

interface Projects {
  src: any;

  projectText: string;
  github: string;
  live: string;
}

const project: Array<Projects> = [
  {
    src: "/countdown-timer.png",
    projectText: "Countdown Timer for events built with HTML and TypeScript",
    github: "https://github.com/JaypeeLan/Countdown-Timer",
    live: "https://countdown-timer-flax-eta.vercel.app/",
  },
  {
    src: "/quiz-game.png",
    projectText: "A simple game built with Open Trivia API and TypeScript",
    github: "https://github.com/JaypeeLan/QUIZ-GAME",
    live: "https://quiz-game-sand-six.vercel.app/",
  },
  {
    src: "/natours.png",
    projectText:
      "A landing page for tourist, looking for places in a new region",
    github: "https://github.com/JaypeeLan/Nexter",
    live: "https://nexter-amber.vercel.app/",
  },
  {
    src: "/paint.png",
    projectText:
      "Paint clone whith JavaScript native canvas API and TypeScript",
    github: "https://github.com/JaypeeLan/Paint-clone",
    live: "https://jaypeelan.github.io/Paint-clone/",
  },
  {
    src: "/Nasa.png",
    projectText: "HD Pictures from NASA API and their details and author",
    github: "https://github.com/JaypeeLan/NASA-APOD",
    live: "https://jaypeelan.github.io/NASA-APOD/",
  },
  {
    src: "/PinP.png",
    projectText:
      "Minimize any video at the corner of your screen with picture-in-pictture",
    github: "https://github.com/JaypeeLan/Picture-in-Picture",
    live: "https://jaypeelan.github.io/Picture-in-Picture/",
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project">
        {project.map((project) => (
          <ProjectsReuseComp
            key={project.src}
            src={project.src}
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
