import React from "react";
import "./style.css";

function AboutMe() {
  return (
    <section id="about-me" className="left-and-right">
      <article className="left">
        <h1>About</h1>
        <h1>Me</h1>
      </article>
      <article className="right">
        <p>
          My name is Daniel Moore and I am a 24 year old programmer who
          specifies in React and Javascript coding. I have studied Javascript
          and CSS under the direction of Farish Kashefinejad at the University
          of Riverside Coding Bootcamp. I have experience with coding through 2
          years of using Unity to develop video games for mobile devices. I also
          have experience working with google chrome extensions and made
          projects using electron.
        </p>

        <section id="skills">
          <article id="skills-top">
            <h1>Skills</h1>
          </article>

          <article id="skills-bottom">
            <div className="skills-list">
              <h1>Front-End</h1>
              <ul>
                <li className="skills-front-end">HTML</li>
                <li className="skills-front-end">CSS</li>
                <li className="skills-front-end">React</li>
                <li className="skills-front-end">Handlebars</li>
              </ul>
            </div>
            <div className="skills-list">
              <h1>Back-End</h1>
              <ul>
                <li className="skills-back-end">Javascript</li>
                <li className="skills-back-end">MySQL</li>
                <li className="skills-back-end">MongoDB</li>
              </ul>
            </div>
          </article>
        </section>

        <p>
          Throughout UCR's coding bootcamp, I have acquired working knowledge of
          MySQL mongoDB and local web storage, alongside utilizing and creating
          API's. Amongst my most polished skills are team work and fast
          learning. The larger projects below are displaying that knowledge
          while the smaller works are some of my personal accomplishments.
        </p>

        <p>
          After completing the bootcamp amongst the top of my class I am eager
          to learn and contribute my skills day after. My adaptability and
          flexible personality make me invaluable to any team. Thank you for
          your time and contact me down below with any questions.
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
