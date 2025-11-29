import React from "react";

const HeroText = () => {
  return (
    <div
      className='font-bold text-white text-center select-none
                 flex flex-col justify-center items-center h-[80vh]
                 px-4 sm:px-8 md:px-12'
    >

      <div
        className="text-[14vw] xs:text-[12vw] sm:text-[8vw] md:text-[6vw]
                   leading-[12vw] sm:leading-[8vw] uppercase
                   flex justify-center gap-2"
      >
        The <span className="text-[#6edb1a]">Spark</span> for
      </div>

      <div
        className="text-[14vw] xs:text-[12vw] sm:text-[8vw] md:text-[6vw]
                   uppercase leading-[12vw] sm:leading-[8vw] font-extrabold
                   flex justify-center items-center gap-2"
      >
        <span className="text-[#6edb1a]">All</span>

        <div className="overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
          <video
            autoPlay
            muted
            loop
            src="Hero-video.mp4"
            className="h-[12vw] xs:h-[10vw] sm:h-[7vw] md:h-[5vw]
                       w-auto rounded-full object-cover"
          />
        </div>

        Things
      </div>

      {/* Line 3 */}
      <div
        className="text-[14vw] xs:text-[12vw] sm:text-[8vw] md:text-[6vw]
                   leading-[12vw] sm:leading-[8vw] uppercase"
      >
        <span className="text-[#6edb1a]">Creative</span>
      </div>
    </div>
  );
};

export default HeroText;
