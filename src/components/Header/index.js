import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Header extends React.Component {
  state = {
    theClassName: "default",
  };

  activateDirectory = () => {
    if (this.state.theClassName === "default") {
      this.setState({
        theClassName: "modified",
      });
    } else {
      this.setState({ theClassName: "default" });
    }
  };

  render() {
    return (
      <header>
        <section className="header-top">
          <div>
            <img
              src={`${process.env.PUBLIC_URL + "images/ProfilePicture.jpeg"}`}
              alt="My beautiful face"
            />
            <h2>Daniel Moore</h2>
          </div>

          <button className="menu-button" onClick={this.activateDirectory}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

          <nav className="header-nav">
            <ul>
              <li>
                <a style={{ color: this.state.textColor }} href="/#about-me">
                  About Me
                </a>
              </li>
              <li>
                <a style={{ color: this.state.textColor }} href="/#work">
                  Projects
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

          <nav className={this.state.theClassName}>
            <ul>
              <li>
                <a style={{ color: this.state.textColor }} href="/#about-me">
                  About Me
                </a>
              </li>
              <li>
                <a style={{ color: this.state.textColor }} href="/#work">
                  Projects
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
        </section>
        <div className="header-bottom"></div>
      </header>
    );
  }
}
