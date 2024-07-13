import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import Card from "../components/card";
import { PROJECTS } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <ChevronRight size={32} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <ChevronLeft size={32} />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function ProjectsMobile() {
  return (
    <div className="tinderCards">
      <div className="cardContainer">
        <Slider {...settings}>
          {PROJECTS.map((project) => (
            <div key={project.src}>
              <Card
                src={project.src}
                projectText={project.projectText}
                github={project.github}
                live={project.live}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
