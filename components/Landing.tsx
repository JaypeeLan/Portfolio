import React from "react";

const Landing = () => {
  return (
    <section id="home">
      <div id="landing-page">
        <p className="hi">
          Hi, <span>I am</span>
        </p>
        <p className="myName">Laniran JohnPaul</p>
        <p>A developer of the web, by the web and for the web</p>
        <p>
          I am a frontend developer interested in bringing your ideas to life,
          solving real life problems and providing new ideas to your
          organisation using latest technologies.
        </p>
        <a
          href="/laniran_johnpaul_CV.pdf"
          target="_blank"
          className="download"
          download="Laniran_johnpaul_CV"
        >
          RESUME
        </a>
      </div>
    </section>
  );
};

export default Landing;
