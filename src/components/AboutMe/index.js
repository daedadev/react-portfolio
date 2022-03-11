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
              <li className="skills-front-end">
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />{" "}
                <div>
                  <h1>HTML</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img src="https://img.icons8.com/color/48/000000/css3.png" />{" "}
                <div>
                  <h1>CSS</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img src="https://img.icons8.com/officel/80/000000/react.png" />
                <div>
                  <h1>React</h1>
                </div>
              </li>
              <li className="skills-front-end">
                <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"></img>
                <div>
                  <h1>NEXT</h1>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-list" data-aos="fade-left">
            <h1>Back-End</h1>
            <ul>
              <li className="skills-back-end">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png" />
                <div>
                  <h1>Javascript</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" />{" "}
                <div>
                  <h1>MySQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" />{" "}
                <div>
                  <h1>MongoDB</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img src="https://img.icons8.com/color/48/000000/graphql.png" />{" "}
                <div>
                  <h1>GraphQL</h1>
                </div>
              </li>
              <li className="skills-back-end">
                <img src="https://img.icons8.com/color/48/000000/firebase.png" />{" "}
                <div>
                  <h1>Firebase</h1>
                </div>
              </li>
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
            My name is Daniel Moore and I am software developer who is always
            <strong> looking to dive deeper into tech.</strong> I have
            experience using React to develop web applications to create
            <strong>responsive front-end pages.</strong> I also have experience
            working with MySQL and MongoDB to create{" "}
            <strong>scalable back-end frameworks</strong> coupled with
            express.js. These skills along with my knowledge of API creation and
            utilization make me a{" "}
            <strong>valuable asset to any fullstack team.</strong>
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
