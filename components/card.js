/* eslint-disable @next/next/no-img-element */
import React from "react";

function Card({ src, projectText, github, live }) {
  return (
    <div className="card">
      <img src={src} alt={projectText} />
      <h3>{projectText}</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </div>
  );
}

export default Card;
