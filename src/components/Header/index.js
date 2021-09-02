import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Header extends React.Component {
  state = {
    theClassName: "default",
  };
  desktop = 1200;
  laptop = 992;
  tablet = 768;
  phone = 480;

  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      this.setState({
        theClassName: "modified",
      });
    } else {
      this.setState({ theClassName: "default" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <header className={this.state.theClassName}>
        <div className={this.state.theClassName}>
          <h2>Daniel Moore</h2>
          <img
            src={`${process.env.PUBLIC_URL + "/images/profilepic.PNG"}`}
            alt="My beautiful face"
          />
        </div>

        <nav className={this.state.theClassName}>
          <ul>
            <li>
              <a style={{ color: this.state.textColor }} href="#about-me">
                About Me
              </a>
            </li>
            <li>
              <a style={{ color: this.state.textColor }} href="#work">
                Work
              </a>
            </li>
            <li>
              <a style={{ color: this.state.textColor }} href="#footer">
                Contact Me
              </a>
            </li>
            <li>
              <Link to={"/resume"}>Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
