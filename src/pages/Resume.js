import React from "react";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";

function Resume() {
  return (
    <Wrapper>
      <Project
        directory={"https://github.com/wron1/work-day-scheduler"}
        title={"Work Day Scheduler"}
        image={`url('/images/scheduler.PNG')`}
        classy={"small-work"}
      />
    </Wrapper>
  );
}

export default Resume;
