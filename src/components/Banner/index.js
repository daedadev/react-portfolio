import React from "react";
import "./style.css";
import Carousel from "react-elastic-carousel";

function Banner() {
  return (
    <div className="banner">
      <div id="text-holder">
        <h1>
          My Name is <strong>Daniel</strong>
        </h1>
        <div id="carousel-holder">
          <h3 id="text-1">I am a </h3>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={1500}
            verticalMode
            itemsToShow={1}
          >
            <h3 className="text-mid">Front End</h3>
            <h3 className="text-mid">Back End</h3>
            <h3 className="text-mid">Front End</h3>
            <h3 className="text-mid">Back End</h3>
            <h3 className="text-mid">Full Stack</h3>
          </Carousel>
          <Carousel enableAutoPlay autoPlaySpeed={3000} itemsToShow={1}>
            <h3 className="text-bottom">Creator</h3>
            <h3 className="text-bottom">Thinker</h3>
            <h3 className="text-bottom">Web Developer</h3>
          </Carousel>
        </div>

        <a id="down-arrow" href="/#aboutme-section" data-aos="fade-left">
          {" "}
          &or;
        </a>
      </div>
    </div>
  );
}

export default Banner;
