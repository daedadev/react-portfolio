import React from "react";
import "./style.css";

function ProjectInfo({ liveApp, githubApp, info, image, classy }) {
  return (
    <section className="work-right">
      <h2>{info}</h2>
      <h3>Click below to visit the live application</h3>
      <a className="large-work" href={liveApp}>
        <div style={{ backgroundImage: image }}></div>

        <p>Live Application</p>
      </a>
      <h3>Click below to visit the github repository</h3>
      <a className="large-work" href={githubApp}>
        <div style={{ backgroundImage: image }}></div>

        <p>Github Repository</p>
      </a>
    </section>
  );
}

export default ProjectInfo;
