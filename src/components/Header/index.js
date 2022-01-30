import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [theClassName, setTheClassName] = useState("default");

  function activateDirectory() {
    if (theClassName === "default") {
      setTheClassName("modified");
      console.log(theClassName);
    } else {
      setTheClassName("default");
      console.log(theClassName);
    }
  }

  return (
    <header>
      <section className="header-top">
        <button className="menu-button" onClick={activateDirectory}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        <nav className="header-nav">
          <ul>
            <li>
              <a href="/#aboutme-section">About Me</a>
            </li>
            <li>
              <a href="/#work-section">Projects</a>
            </li>
            <li>
              <a href="/#footer">Contact Me</a>
            </li>
            <li>
              <Link to={"/resume"}>Resume</Link>
            </li>
          </ul>
        </nav>

        <nav className={theClassName}>
          <ul id="nav-list">
            <li>
              <a href="/#about-me">About Me</a>
            </li>
            <li>
              <a href="/#work">Projects</a>
            </li>
            <li>
              <a href="/#footer">Contact Me</a>
            </li>
            <li>
              <Link to={"/resume"}>Resume</Link>
            </li>
          </ul>
          <ul id="nav-image-list">
            <a href="https://github.com/wron1">
              <img
                className="nav-images"
                src="https://img.icons8.com/color/240/000000/github--v1.png"
                alt="github"
                height="40"
              />
            </a>
            <a href="https://www.linkedin.com/in/danielmoore201/">
              <img
                className="nav-images"
                src="https://img.icons8.com/color/240/000000/linkedin.png"
                alt="linkedin"
                height="40"
              />
            </a>
            <a href="https://twitter.com/Daedadev">
              <img
                className="nav-images"
                src="https://img.icons8.com/color/240/000000/twitter--v1.png"
                alt="twitter"
                height="40"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCq2hGaZWRavHjTbd-lealaQ/">
              <img
                className="nav-images"
                src="https://img.icons8.com/color/240/000000/youtube-play.png"
                alt="YouTube"
                height="40"
              />
            </a>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
