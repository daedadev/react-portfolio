import React, { useEffect } from "react";
import ContactForm from "../ContactForm";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer id="footer">
      <section id="footer-top">
        <article id="contact-text">
          <h1 data-aos="zoom-out">Contact Me</h1>
        </article>
      </section>
      <section id="footer-bottom" data-aos="fade-down">
        <article id="contact-form-holder" data-aos="fade-up">
          <ContactForm />
        </article>
        <nav id="contact-details" data-aos="fade-up">
          <ul>
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
      </section>
    </footer>
  );
}

export default Footer;
