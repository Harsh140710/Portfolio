import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { NavBarContext } from "../../context/NavContext";

const NavBar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavBarContext)

  return (
    <div className="flex fixed -top-2.5 z-4 w-full items-center justify-between">
      <div className="pl-3 pt-3">
        <h1 className="text-6xl font-bold ">Harsh</h1>
      </div>
      <div
      onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%';
        }}
        className="h-10 bg-black w-[16vw] relative -mt-3"
      >
        <div
          ref={navGreenRef}
          className="bg-[#6edb1a] h-0 transition-all absolute top-0 w-full"
        ></div>
        <div className="relative flex flex-col gap-1.5 items-end justify-center h-full px-5">
          <div className="w-20 h-0.5 bg-white"></div>
          <div className="w-10 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
