import React from "react";
import { Player } from "video-react";

function VideoPlayer(poster, src) {
  return <Player playsInline poster={poster} src={src} />;
}

export default VideoPlayer;
