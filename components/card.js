/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GitHub, Link } from "react-feather";

function Card({ src, projectText, github, live }) {
  return (
    <div className="card">
      <div className="project-img">
        <img src={src} alt={projectText} width={"100%"} height={"100%"} />
      </div>
      <h3>{projectText}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <GitHub />
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer">
        <Link />
      </a>
    </div>
  );
}

export default Card;
