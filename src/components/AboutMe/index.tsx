import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

export function AboutMe() {
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
                  alt="React javascript logo"
                  src="/images/icons/react.png"
                />
                <div className="tooltip">
                  <h1>React</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img alt="Next logo" src="/images/icons/nextjs.png" />
                <div className="tooltip">
                  <h1>NEXT</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img
                  alt="Tailwind CSS Logo"
                  src="/images/icons/tailwind-css.png"
                />
                <div className="tooltip">
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
                <img alt="MySQL logo" src="/images/icons/mysql.png" />
                <div className="tooltip">
                  <h1>MySQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img alt="MongoDB logo" src="/images/icons/mongodb.png" />
                <div className="tooltip">
                  <h1>MongoDB</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img alt="GraphQL logo" src="/images/icons/graphql.png" />
                <div className="tooltip">
                  <h1>GraphQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img alt="Firebase logo" src="/images/icons/firebase.png" />
                <div className="tooltip">
                  <h1>Firebase</h1>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="skills-list"
            id="languages"
            data-aos="fade-left"
            data-aos-once="true"
          >
            <h1>Languages</h1>
            <ul>
              <li className="skills-front-end">
                <img alt="Typescript logo" src="/images/icons/typescript.png" />
                <div className="tooltip">
                  <h1>Typescript</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img alt="Javascript" src="/images/icons/javascript.png" />
                <div className="tooltip">
                  <h1>Javascript</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img alt="Elixir logo" src="/images/icons/elixir.png" />
                <div className="tooltip">
                  <h1>Elixir</h1>
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
            My name is Daniel Moore and I am a software developer who is always
            <strong> looking to dive deeper into tech.</strong> Creating
            responsive and scalable frontends with react is my favorite thing to
            do and creating intricate backends with node and Sequelize is what
            comes natural to me.
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