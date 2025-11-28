import React from "react";
import { useRef } from "react";

const NavBar = () => {
  const navGreenRef = useRef(null);
  return (
    <div className="flex fixed -top-2.5 z-4 w-full items-center justify-between">
      <div className="pl-3 pt-3">
        <h1 className="text-6xl font-bold ">Harsh</h1>
      </div>
      <div
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%';
        }}
        className="h-10 bg-black w-[16vw] relative -mt-5"
      >
        <div
          ref={navGreenRef}
          className="bg-[#6edb1a] h-0 transition-all absolute top-0 w-full"
        ></div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default NavBar;
