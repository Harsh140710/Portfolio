import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="Hero-video.mp4"
        muted
        loop
        autoPlay
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Video;
