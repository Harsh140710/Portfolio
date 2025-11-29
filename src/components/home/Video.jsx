import React from "react";

const Video = () => {
  return (
    <video
      src="Hero-video.mp4"
      muted
      loop
      autoPlay
      className="h-full w-full object-cover"
    />
  );
};

export default Video;
