import React from "react";
import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="text-white flex items-center justify-center gap-5">
      <div className="border-3 h-[8vw] flex items-center px-10 border-white rounded-full uppercase hover:text-[#6edb1a] hover:border-[#6edb1a]">
        <Link to="/projects" className="text-[6vw]">Projects</Link>
      </div>
      <div className="border-3 h-[8vw] flex items-center px-10 border-white rounded-full uppercase hover:text-[#6edb1a] hover:border-[#6edb1a]">
        <Link to="/agency" className="text-[6vw]">Agency</Link>
      </div>
    </div>
  );
};

export default BottomText;
