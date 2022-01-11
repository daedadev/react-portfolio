import React from "react";
import "./style.css";
import VideoPlayer from "../VideoPlayer";

function Modal(video, closeModal) {
  return (
    <div>
      <h1>This Is A Modal</h1>
      <button onClick={closeModal}>Close</button>
      <VideoPlayer poster={""} src={video} />
    </div>
  );
}

export default Modal;
