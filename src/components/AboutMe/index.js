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
          My name is Daniel Moore and I am a 24 year old student programmer who
          specifies in React and Javascript coding. I have studied Javascript
          and CSS under the direction of Farish Kashefinejad while at the
          University of Riverside Coding Bootcamp. I have a decent amount of
          previous experience with coding through a couple years of using Unity
          to develop video games for mobile devices. I also have experience
          working with google chrome extensions and have made a few self
          projects using electron.
        </p>

        <p>
          Since starting the coding bootcamp at UCR I have gained much knowledge
          involving the use of MySQL, mongoDB, local web storage and utilizing
          and creating API's. I have learned so much during the course of the
          camp, team work and fast learning being amongst my most polished
          skills. The larger sized units of the projects below are some
          displaying that knowledge while the smaller works are some of my
          personal accomplishments. All link to their respective github pages.
          Thank you for giving this a read and I hope that you enjoy.
        </p>
      </article>
    </section>
  );
}

export default AboutMe;