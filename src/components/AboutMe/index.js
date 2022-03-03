import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about-me" data-aos="fade-up">
      <section id="skills">
        <article id="skills-top">
          <h1 data-aos="zoom-out">Skills</h1>
        </article>

        <article id="skills-bottom">
          <div className="skills-list" data-aos="fade-right">
            <h1>Front-End</h1>
            <ul>
              <li className="skills-front-end">HTML</li>
              <li className="skills-front-end">CSS</li>
              <li className="skills-front-end">React</li>
              <li className="skills-front-end">Handlebars</li>
            </ul>
          </div>
          <div className="skills-list" data-aos="fade-left">
            <h1>Back-End</h1>
            <ul>
              <li className="skills-back-end">Javascript</li>
              <li className="skills-back-end">MySQL</li>
              <li className="skills-back-end">MongoDB</li>
              <li className="skills-back-end">GraphQL</li>
            </ul>
          </div>
        </article>
      </section>
      <article id="aboutme-right">
        <article id="aboutme-top">
          <h1 data-aos="zoom-out">About Me</h1>
        </article>
        <article className="paragraph">
          <p>
            My name is Daniel Moore and I am a 24 year old programmer who is
            <strong> always looking to dive deeper into tech.</strong> I have
            experience with coding through 2 years of using Unity to develop
            video games for mobile devices. I also have experience working with
            google chrome extensions and made projects using electron. My skills
            include{" "}
            <strong>
              working knowledge of React MySQL mongoDB and local web storage,
              alongside utilizing and creating API's.
            </strong>{" "}
          </p>
          <img
            src={`${process.env.PUBLIC_URL + "images/ProfilePicture.jpeg"}`}
            alt="My beautiful face"
            loading="lazy"
          />
        </article>
        <article className="paragraph">
          <p>
            Amongst my most polished skills are team work and fast learning. The
            larger projects below are displaying that knowledge while the
            smaller works are some of my personal accomplishments. I am eager to
            learn and contribute my skills day after day.{" "}
            <strong>
              My adaptability and flexible personality make me invaluable to any
              team.
            </strong>{" "}
            Thank you for your time and contact me down below with any
            questions.
          </p>
        </article>
      </article>
    </section>
  );
}

export default AboutMe;
