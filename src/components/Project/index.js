import React from "react";
import "./style.css";

function Project({ directory, title, image, classy }) {
  return (
    <article className={classy}>
      <div
        style={{ backgroundImage: image }}
        onClick={(event) => (window.location.href = directory)}
      ></div>

      <p>{title}</p>
    </article>
  );
}

export default Project;
