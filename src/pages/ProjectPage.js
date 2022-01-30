import { React, useEffect } from "react";
import { useLocation } from "react-router";
import ProjectInfo from "../components/ProjectInfo";

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    video,
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
      video={video}
    />
  );
}

export default ProjectPage;
