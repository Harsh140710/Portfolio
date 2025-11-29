import React from "react";
import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="text-white flex items-center justify-center gap-5 pb-10">
      <div
        className="border-2 h-[14vw] sm:h-[10vw] md:h-[6vw] px-6 sm:px-12 border-white
                      rounded-full flex items-center justify-center uppercase 
                      transition-all hover:text-[#6edb1a] hover:border-[#6edb1a]"
      >
        <Link
          className="text-[7vw] sm:text-[5vw] md:text-[2.8vw]"
          to="/projects"
        >
          Projects
        </Link>
      </div>

      <div
        className="border-2 h-[14vw] sm:h-[10vw] md:h-[6vw] px-6 sm:px-12 border-white
                      rounded-full flex items-center justify-center uppercase
                      transition-all hover:text-[#6edb1a] hover:border-[#6edb1a]"
      >
        <Link className="text-[7vw] sm:text-[5vw] md:text-[2.8vw]" to="/agency">
          Agency
        </Link>
      </div>
    </div>
  );
};

export default BottomText;
