import React from "react";
import { useLocation } from "react-router";
import ProjectInfo from "../components/ProjectInfo";
import Wrapper from "../components/Wrapper";

function ProjectPage() {
  const location = useLocation();
  const { liveApp, githubApp, title, image } = location.state;

  return (
    <Wrapper>
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>{title}</h1>
        </section>

        <section className="work-right">
          <ProjectInfo
            liveApp={liveApp}
            githubApp={githubApp}
            title={title}
            image={image}
          />
        </section>
      </section>
    </Wrapper>
  );
}

export default ProjectPage;
