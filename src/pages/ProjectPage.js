import React from "react";
import { useLocation } from "react-router";
import ProjectInfo from "../components/ProjectInfo";

function ProjectPage() {
  const location = useLocation();
  const { liveApp, githubApp, title, image, info } = location.state;

  return (
    <section className="large-container">
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>{title}</h1>
        </section>
        <ProjectInfo
          liveApp={liveApp}
          githubApp={githubApp}
          title={title}
          image={image}
          info={info}
        />
      </section>
    </section>
  );
}

export default ProjectPage;
