import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import { IProjectModalProps } from "src/types";

export function ProjectModal({
  liveApp, githubApp, info, challenges, triumphs, image, title,
  dependancies, video, toggleModal, setToggleModal }: IProjectModalProps) {

  const projectRef = useRef<any>();
  const [modalOpen, setModalOpen] = useState(false);

  const openLiveApp = () => {
    window.open(liveApp);
  };
  const openGithub = () => {
    window.open(githubApp);
  };

  const handleWindowClick = (e: any) => {
    if (projectRef.current && !projectRef.current.contains(e.target)) {
      console.log('brij')
      if(toggleModal){
        setToggleModal(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggleModal]);

  return (
    <>
      <section
        ref={projectRef}
        className={toggleModal ? `large-cell` : `display-off`}>
        <span id="project-info" className="mobile-jump"></span>
        <section id="title-cell">
          <h2>{title}</h2>
          <button id="modal-button" onClick={() => setToggleModal(false)}>
            <h1>X</h1>
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
              <button className="link-buttons" id="videoDemo" onClick={() => setModalOpen(true)}>
                Video
              </button>
            </article>
          </article>
          <div onClick={() => setModalOpen(false)} className={modalOpen ? "visible" : "hidden"}>
            <div className="video-holder">
              <button id="close-player" onClick={() => setModalOpen(false)}>
                X
              </button>
              {video === "" ? (
                <h1>Video Currently Unavailable</h1>
              ) : (
                <ReactPlayer
                  height="80%"
                  width="70%"
                  controls
                  url={video}
                  playing={modalOpen}
                />
              )}
            </div>
          </div>
        </section>
        <button
          id="close-project-button"
          onClick={() => setToggleModal(false)}
        >
          Close
        </button>
        <div className="close-large-modal" onClick={() => setToggleModal(false)}>
        </div>
      </section>
    </>

  );
}
