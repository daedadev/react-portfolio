import React from "react";
import { useLocation } from "react-router";
import ProjectInfo from "../components/ProjectInfo";

function ProjectPage() {
  const location = useLocation();
  const {
    liveApp,
    githubApp,
    title,
    image,
    info,
    challenges,
    triumphs,
    dependancies,
  } = location.state;

  return (
    <ProjectInfo
      liveApp={liveApp}
      githubApp={githubApp}
      title={title}
      image={image}
      info={info}
      challenges={challenges}
      triumphs={triumphs}
      dependancies={dependancies}
    />
  );
}

export default ProjectPage;
