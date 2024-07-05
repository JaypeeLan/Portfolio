import React, { useState, useRef } from "react";
import TinderCard from "react-tinder-card";
import Card from "../components/card";
import { PROJECTS } from "../data";

export default function ProjectsMobile() {
  const [currentIndex, setCurrentIndex] = useState(PROJECTS.length - 1);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useRef(
    Array(PROJECTS.length)
      .fill(0)
      .map((_, i) => React.createRef())
  );

  const swiped = (direction, projectName, index) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : PROJECTS.length - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex < PROJECTS.length - 1 ? prevIndex + 1 : 0
      );
    }
    console.log(`You swiped: ${direction} on ${projectName}`);
  };

  const outOfFrame = (projectName) => {
    console.log(`${projectName} left the screen!`);
  };

  const swipe = async (dir) => {
    if (currentIndex >= 0 && currentIndex < PROJECTS.length) {
      await childRefs.current[currentIndex].current.swipe(dir);
    }
  };

  const restoreCard = async () => {
    if (currentIndex < PROJECTS.length - 1) {
      await childRefs.current[currentIndex + 1].current.restoreCard();
      setCurrentIndex((prevIndex) =>
        prevIndex < PROJECTS.length - 1 ? prevIndex + 1 : 0
      );
    } else {
      await childRefs.current[0].current.restoreCard();
      setCurrentIndex(0);
    }
  };

  return (
    <div className="tinderCards">
      <div className="cardContainer">
        {PROJECTS.map((project, index) => (
          <TinderCard
            ref={childRefs.current[index]}
            className="swipe"
            key={project.src}
            onSwipe={(dir) => swiped(dir, project.projectText, index)}
            onCardLeftScreen={() => outOfFrame(project.projectText)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundColor: "white",
                display: currentIndex === index ? "block" : "none",
              }}
            >
              <Card
                src={project.src}
                projectText={project.projectText}
                github={project.github}
                live={project.live}
              />
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => swipe("left")}>Next</button>
        <button onClick={restoreCard}>Previous</button>
      </div>
    </div>
  );
}
