import React from "react";
import "./style.css";

function AboutMe() {
  return (
    <section id="about-me" class="left-and-right">
      <article class="left">
        <h1>About</h1>
        <h1>Me</h1>
      </article>

      <article class="right">
        <p>
          My name is Daniel Moore and I am a 24 year old student programmer who
          is currently learning Javascript and CSS under the direction of Farish
          Kashefinejad while at the University of Riverside Coding Bootcamp. I
          have a decent amount of previous experience with coding through a
          couple years of using Unity to develop video games for mobile devices.
          The change to web development is a bit new to me, however I am
          familiar with the languages as I have coded a few google chrome
          extensions which use the same front end and backend of html and
          javascript repectively. I have also tried my hand with react and have
          also used node a bit. I am looking forward to learning more and
          appreciate you taking the time to read this.
        </p>

        <p>
          Since starting the coding bootcamp at UCR I have gained much knowledge
          involving the use of MySQL, mongoDB, local web storage and utilizing
          and creating API's. Below are some projects displaying that knowledge.
        </p>
      </article>
    </section>
  );
}

export default AboutMe;
