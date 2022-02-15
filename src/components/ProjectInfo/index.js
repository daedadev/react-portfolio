import React, { useState } from "react";
import "./style.css";
import ReactPlayer from "react-player";

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
  showProject,
  toggleModal,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  function showModal() {
    setModalOpen(true);
  }

  function hideModal() {
    setModalOpen(false);
  }

  const openLiveApp = () => {
    window.open(liveApp);
  };
  const openGithub = () => {
    window.open(githubApp);
  };

  return (
    <section className={showProject}>
      <span id="mobile-jump"></span>
      <section id="title-cell">
        <h2>{title}</h2>
        <button id="modal-button" onClick={() => toggleModal("display-off")}>
          x
        </button>
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
            <article id="dependancy-cell">
              <h2>Frameworks Used</h2>
              <ul>
                {dependancies.map((deps) => {
                  return <li key={deps}>{deps}</li>;
                })}
              </ul>
            </article>
          </article>
          <article id="link-cell">
            <button className="link-buttons" id="github" onClick={openGithub}>
              Github
            </button>
            <button className="link-buttons" id="liveApp" onClick={openLiveApp}>
              LiveApp
            </button>
            <button className="link-buttons" id="videoDemo" onClick={showModal}>
              Video
            </button>
          </article>
        </article>
        <div className={modalOpen ? "visible" : "hidden"}>
          <div className="video-holder">
            <button id="close-player" onClick={hideModal}>
              X
            </button>
            <ReactPlayer
              height="100%"
              width="100%"
              controls
              url={video}
              playing={modalOpen}
            />
          </div>
        </div>
      </section>
      <button
        id="close-project-button"
        onClick={() => toggleModal("display-off")}
      >
        Close Modal
      </button>
    </section>
  );
}

export default ProjectInfo;
