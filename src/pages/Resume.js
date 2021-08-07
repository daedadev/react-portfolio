import React from "react";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";

function Resume() {
  return (
    <Wrapper>
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>Resume</h1>
        </section>

        <section className="work-right">
          <Project
            directory={"/resume"}
            title={"This Is Just A PlaceHolder"}
            image={`url(${process.env.PUBLIC_URL + "/images/scheduler.PNG"})`}
            classy={"small-work"}
          />
        </section>
      </section>
    </Wrapper>
  );
}

export default Resume;
