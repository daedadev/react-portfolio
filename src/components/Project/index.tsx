import React from 'react';
import { IProjectData } from "src/types";
import "./style.css";

function Project(props: IProjectData) {
  const {  liveApp,
    githubApp,
    title,
    image,
    classy,
    info,
    challenges,
    triumphs,
    dependancies,
    icons,
    video,
  } = props
  return (
    <>
      {/* <button
        style={{
          backgroundImage: image,
        }}
        className={classy}
        onClick={() =>
          openModal(
            liveApp,
            githubApp,
            title,
            image,
            info,
            challenges,
            triumphs,
            dependancies,
            video,
            openModal
          )
        }
      >
        <p className="text-p">{title}</p>
        <div className="icon-holder">
          {icons.map((icon, index) => {
            return (
              <img
                className="icon-item"
                key={index}
                alt={icon.alt}
                src={icon.src}
              ></img>
            );
          })}
        </div>
      </button>
      <ProjectInfo
          liveApp={liveApp}
          githubApp={githubApp}
          title={title}
          image={image}
          info={info}
          challenges={challenges}
          triumphs={triumphs}
          dependancies={dependancies}
          video={video}
          showProject={showProject}
          toggleModal={toggleModal}
        /> */}
    </>
  );
}

export default Project;
