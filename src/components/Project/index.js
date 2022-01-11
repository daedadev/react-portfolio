import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Project({
  liveApp,
  githubApp,
  title,
  image,
  classy,
  info,
  challenges,
  triumphs,
  dependancies,
}) {
  return (
    <Link
      className={classy}
      to={{
        pathname: "/project",
        state: {
          liveApp: liveApp,
          githubApp: githubApp,
          title: title,
          image: image,
          info: info,
          challenges: challenges,
          triumphs: triumphs,
          dependancies: dependancies,
        },
      }}
    >
      <div style={{ backgroundImage: image }}></div>

      <p>{title}</p>
    </Link>
  );
}

export default Project;
