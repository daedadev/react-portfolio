import React, { useEffect, useState } from "react";
import "./style.css";
import { AboutMe } from "../AboutMe";
import { Project } from "../Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { projectData } from "../ProjectModal/projectData";

export function LargeContainer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="aboutme-section" className="large-container">
      <AboutMe />
      <section id="work">
        <section id="project-title">
          <div id="work-section"></div>
          <h1 data-aos="zoom-out" data-aos-once="true">
            Projects
          </h1>
        </section>
        <section
          className="projects-main"
          data-aos="fade-left"
          data-aos-once="true"
        >
          {projectData.map((project, index) => {
            return(
              <Project key={index}
                liveApp={project.liveApp}
                githubApp={project.githubApp}
                title={project.title}
                image={project.image}
                classy={project.classy}
                info={project.info}
                challenges={project.challenges}
                triumphs={project.triumphs}
                dependancies={project.dependancies}
                icons={project.icons}
                video={project.video}
              />
            )
          })}
        </section>
      </section>
    </section>
  );
}