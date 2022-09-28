import React from "react";
import "./style.css";
import Carousel from "react-elastic-carousel";

export function Banner() {
  const carouselOneProps = {
    enableAutoPlay: true,
    autoPlaySpeed: 1000,
    verticalMode: true,
    itemsToShow: 1,
    isRTL: false,
  }
  const carouselTwoProps = {
    enableAutoPlay: true,
    autoPlaySpeed: 2000,
    verticalMode: false,
    itemsToShow: 1,
    isRTL: false,
  }
  return (
    <div className={"banner"}>
      <div id="text-holder">
        <h1>
          My Name is <strong>Daniel</strong>
        </h1>
        <div id="carousel-holder">
          <h3 id="text-1">I am a </h3>
          <Carousel {...carouselOneProps}
          >
            <h3 className="text-mid">Front End</h3>
            <h3 className="text-mid">Back End</h3>
            <h3 className="text-mid">Front End</h3>
            <h3 className="text-mid">Back End</h3>
            <h3 className="text-mid">Full Stack</h3>
          </Carousel>
          <Carousel {...carouselTwoProps}>
            <h3 className="text-bottom">Creator</h3>
            <h3 className="text-bottom">Thinker</h3>
            <h3 className="text-bottom">Web Developer</h3>
          </Carousel>
        </div>

        <a id="down-arrow" href="/#aboutme-section">
          {" "}
          &or;
        </a>
      </div>
    </div>
  );
}