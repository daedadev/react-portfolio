import React, { useState } from 'react';
import { IProjectProps } from "src/types";
import { ProjectModal } from '../ProjectModal';
import "./style.css";

export function Project( props: IProjectProps) {
  const {liveApp, githubApp, title, image, 
    classy, info, challenges, triumphs, 
    dependancies, icons, video} = props;
  
    const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <a
        style={{
          backgroundImage: image,
        }}
        onClick={() => setToggleModal(true)}
        className={classy}
        href="/#project-info"
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
      </a>
      <ProjectModal
        liveApp={liveApp}
        githubApp={githubApp}
        title={title}
        image={image}
        info={info}
        challenges={challenges}
        triumphs={triumphs}
        dependancies={dependancies}
        video={video}
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
      />
    </>
  );
}