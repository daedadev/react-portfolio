import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";

function ProjectInfo({ liveApp, githubApp, title, image, classy }) {
  return (
    <Wrapper>
      <a className={classy} href={liveApp}>
        <div style={{ backgroundImage: image }}></div>

        <p>Live Application</p>
      </a>
      <a className={classy} href={githubApp}>
        <div style={{ backgroundImage: image }}></div>

        <p>Github Repository</p>
      </a>
    </Wrapper>
  );
}

export default ProjectInfo;
