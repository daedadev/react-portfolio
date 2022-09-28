import React, { useEffect, useState } from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import Project from "../Project";
import ProjectInfo from "../ProjectInfo";
import Aos from "aos";
import "aos/dist/aos.css";

function LargeContainer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [liveApp, setLiveApp] = useState();
  const [githubApp, setGithubApp] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [info, setInfo] = useState();
  const [challenges, setChallenges] = useState();
  const [triumphs, setTriumphs] = useState();
  const [dependancies, setDependancies] = useState([]);
  const [video, setVideo] = useState();
  const [showProject, setShowProject] = useState("display-off");

  function setModal(
    liveApp,
    githubApp,
    title,
    image,
    info,
    challenges,
    triumphs,
    dependancies,
    video
  ) {
    window.location.href = "/#project-info";

    setLiveApp(liveApp);
    setGithubApp(githubApp);
    setTitle(title);
    setImage(image);
    setInfo(info);
    setChallenges(challenges);
    setTriumphs(triumphs);
    setDependancies(dependancies);
    setVideo(video);

    setShowProject("large-cell");
  }

  function toggleModal(theClass) {
    setShowProject(theClass);
  }

  return (
    <section id="aboutme-section" className="large-container">
      <AboutMe />
      <section id="work">
        <section id="project-title">
          <div id="work-section"></div>
          <h1 data-aos="zoom-out" data-aos-once="true">
            Projects
          </h1>
        </section>
        {showProject === "large-cell" && (
          <div
            className="close-large-modal"
            onClick={() => toggleModal("display-off")}
          ></div>
        )}

        <section
          className="projects-main"
          data-aos="fade-left"
          data-aos-once="true"
        >
          {/* <Project/> */}

        </section>

      </section>
    </section>
  );
}

export default LargeContainer;
