import React, { useState } from "react";
import Modal from "../Modal";
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
  video,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  function showModal() {
    setModalOpen(true);
    console.log(modalOpen);
  }

  function hideModal() {
    setModalOpen(false);
    console.log(modalOpen);
  }

  return (
    <section className="large-cell">
      <section id="title-cell">
        <h2>{title}</h2>
      </section>
      <section id="main-cell">
        <article style={{ backgroundImage: image }} id="image-cell"></article>
        <article id="right-cell">
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
                <h2>Frameworks Used</h2>
                <ul>
                  {dependancies.map((deps) => {
                    return <li key={deps}>{deps}</li>;
                  })}
                </ul>
              </article>
              <article id="link-cell">
                <button className="link-buttons" id="github" href={githubApp}>
                  Github
                </button>
                <button className="link-buttons" id="liveApp" href={liveApp}>
                  LiveApp
                </button>
                <button
                  className="link-buttons"
                  id="videoDemo"
                  onClick={showModal}
                >
                  Video
                </button>
              </article>
            </article>
          </article>
        </article>
      </section>
      <Modal video={video} closeModal={hideModal} />
    </section>
  );
}

export default ProjectInfo;
