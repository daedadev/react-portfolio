import React from "react";
import "./style.css";

function ProjectInfo({
  liveApp,
  githubApp,
  info,
  challenges,
  triumphs,
  image,
  title,
  dependancies,
}) {
  return (
    <section className="large-cell">
      <article style={{ backgroundImage: image }} id="image-cell"></article>
      <article id="right-cell">
        <div id="title-cell">
          <h2>{title}</h2>
        </div>
        <article id="info-cell">
          <article id="about-cell">
            <p>
              <b>Info:</b> {info}
            </p>
            <br />
            <p>
              <b>Challenges:</b> {challenges}
            </p>
            <br />
            <p>
              <b>Successes: </b>
              {triumphs}
            </p>
          </article>
          <article id="inner-right-cell">
            <article id="dependancy-cell">
              <ul>
                {dependancies.map((deps) => {
                  return <li>{deps}</li>;
                })}
              </ul>
            </article>
            <article id="link-cell">
              <button href={githubApp}>Github</button>
              <button href={liveApp}>LiveApp</button>
            </article>
          </article>
        </article>
      </article>
    </section>
  );
}

export default ProjectInfo;
