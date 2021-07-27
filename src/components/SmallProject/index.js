import React from "react";
import "./style.css";

function SmallProject({ directory, title, image }) {
  return (
    <article className="small-work">
      <div
        style={{ backgroundImage: image }}
        onClick={(event) => (window.location.href = directory)}
      ></div>

      <p>{title}</p>
    </article>
  );
}

export default SmallProject;
