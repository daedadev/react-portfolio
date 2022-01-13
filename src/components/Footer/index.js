import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="footer" className="left-and-right">
      <article className="left">
        <h1>Contact</h1>
        <h1>Me</h1>
      </article>
      <article className="right">
        <nav>
          <ul>
            <li>
              <p>951-427-8876</p>
            </li>
            <li>
              <p>DanielChrisMoore@gmail.com</p>
            </li>
            <li>
              <a
                href="https://github.com/wron1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/danielmoore201"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </footer>
  );
}

export default Footer;
