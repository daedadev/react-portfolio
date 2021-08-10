import React from "react";
import { useLocation } from "react-router";
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
          <h1>Project Info</h1>
        </section>
      </section>
    </Wrapper>
  );
}

export default ProjectPage;
