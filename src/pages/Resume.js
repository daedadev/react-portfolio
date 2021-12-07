import React from "react";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";
import ResumeFile from "./Resume";

function Resume() {
  return (
    <Wrapper>
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>Resume</h1>
        </section>

        <section className="work-right">
          <ResumeFile />
        </section>
      </section>
    </Wrapper>
  );
}

export default Resume;
