import React from "react";

const HeroText = () => {
  return (
    <div className='font-["Personal-font-500"] pt-5 font-bold text-white text-center'>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[7vw]">
        The <span className="text-[#6edb1a]"> Spark </span> for
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[7vw] font-extrabold">
        <span className="text-[#6edb1a]">All</span>{" "}
        <div className="rounded-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            src="Hero-video.mp4"
            className="h-[8vw] rounded-full overflow-hidden"
          />
        </div>{" "}
        Things
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[7vw]">
        <span className="text-[#6edb1a]">Creative</span>
      </div>
    </div>
  );
};

export default HeroText;
