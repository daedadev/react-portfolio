import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Project({ liveApp, githubApp, title, image, classy }) {
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
        },
      }}
    >
      <div style={{ backgroundImage: image }}></div>

      <p>{title}</p>
    </Link>
  );
}

export default Project;
