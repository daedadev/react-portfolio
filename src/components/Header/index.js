import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <div>
        <h2>Daniel Moore</h2>
        <img
          src={`${process.env.PUBLIC_URL + "/images/profilepic.PNG"}`}
          alt="My beautiful face"
        />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#footer">Contact Me</a>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
