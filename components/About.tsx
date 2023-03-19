import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about_headings">
          <h2>About me</h2>
          <Image src="/avatar.svg" height={100} width={100} alt="avatar" />
        </div>
        <div className="about-me">
          <p>
            An energetic self-taught and skilled web developer with excellent
            awareness of web design industry trends and issues regarding user
            experience and accessibility. Created websites for clients as well
            as worked on self-initiated projects using the best practices.
            During my free time, I love solving technical problems, a computer
            geek. Outside work like being around friends and enjoy video games,
            learning a new language (I am a big fan of brazilian portuguese and
            spanish) and playing chess, and also polish my algorithm and CSS.
          </p>

          <p>My Stack: JavaScript, React.js, Next.js, TypeScript, Node.js</p>
        </div>
      </section>
    </>
  );
};

export default About;
