import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about-me" data-aos="fade-up" data-aos-once="true">
      <section id="skills">
        <article id="skills-top">
          <h1 data-aos="zoom-out" data-aos-once="true">
            Skills
          </h1>
        </article>

        <article id="skills-bottom">
          <div
            className="skills-list"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <h1>Front-End</h1>
            <ul>
              <li className="skills-front-end">
                <img
                  alt="HTML logo"
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                />
                <div className="front-tooltip">
                  <h1>HTML</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img
                  alt="Cascading Style Sheets logo"
                  src="https://img.icons8.com/color/48/000000/css3.png"
                />
                <div className="front-tooltip">
                  <h1>CSS</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img
                  alt="React javascript logo"
                  src="https://img.icons8.com/officel/80/000000/react.png"
                />
                <div className="front-tooltip">
                  <h1>React</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img
                  alt="Next logo"
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                />
                <div className="front-tooltip">
                  <h1>NEXT</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img alt="Tailwind CSS Logo" src="/images/tailwind-css.PNG" />
                <div className="front-tooltip">
                  <h1>Tailwind</h1>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="skills-list"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <h1>Back-End</h1>
            <ul>
              <li className="skills-back-end">
                <img
                  alt="Javascript logo"
                  src="https://img.icons8.com/ios/50/000000/javascript--v1.png"
                />
                <div className="back-tooltip">
                  <h1>Javascript</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img
                  alt="MySQL logo"
                  src="https://img.icons8.com/color/48/000000/mysql-logo.png"
                />
                <div className="back-tooltip">
                  <h1>MySQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img
                  alt="MongoDB logo"
                  src="https://img.icons8.com/color/48/000000/mongodb.png"
                />
                <div className="back-tooltip">
                  <h1>MongoDB</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img
                  alt="GraphQL logo"
                  src="https://img.icons8.com/color/48/000000/graphql.png"
                />
                <div className="back-tooltip">
                  <h1>GraphQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img
                  alt="Firebase logo"
                  src="https://img.icons8.com/color/48/000000/firebase.png"
                />
                <div className="back-tooltip">
                  <h1>Firebase</h1>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <article id="aboutme-right">
        <article id="aboutme-top">
          <h1 data-aos="zoom-out" data-aos-once="true">
            About Me
          </h1>
        </article>
        <article className="paragraph">
          <p>
            My name is Daniel Moore and I am software developer who is always
            <strong> looking to dive deeper into tech.</strong> creating
            responsive and scalable frontends with react is my favorite thing to
            do. While creating intricate backends with node and Sequelize is
            what comes natural to me.
          </p>
          <img
            src={`${process.env.PUBLIC_URL + "images/ProfilePicture.jpeg"}`}
            alt="My beautiful face"
            loading="lazy"
          />
        </article>
        <article className="paragraph">
          <p>
            While coding is where my mind is I will always be a musician at
            heart. If there is anything I have taken from the professional music
            world it's that to succeed you can't be afraid of failure. With
            persistance comes sustain and
            <strong> perfect practice makes perfect. </strong>
            Contact me down below so we can get in touch. I would love to work
            with you.
          </p>
        </article>
        <a id="contact-button" href="/#footer">
          Contact Me
        </a>
      </article>
    </section>
  );
}

export default AboutMe;
