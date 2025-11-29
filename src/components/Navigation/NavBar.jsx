import React, { useContext, useRef } from "react";
import { NavBarContext } from "../../context/NavContext";

const NavBar = ({ theme = "dark" }) => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavBarContext);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const lineColor = isDark ? "bg-white" : "bg-black";

  return (
    <div className="flex fixed -top-2.5 left-0 z-50 w-full items-center justify-between">
      <h1
        className={`font-bold ${textColor}
                    text-4xl sm:text-5xl md:text-6xl
                    pl-3 pt-3`}
      >
        Harsh
      </h1>

      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => (navGreenRef.current.style.height = "100%")}
        onMouseLeave={() => (navGreenRef.current.style.height = "0%")}
        className="
          h-8 sm:h-9 md:h-10
          w-[22vw] sm:w-[18vw] md:w-[16vw]
          bg-black relative -mt-3
        "
      >
        <div
          ref={navGreenRef}
          className="bg-[#6edb1a] h-0 transition-all absolute top-0 w-full"
        ></div>

        <div className="relative flex flex-col gap-1.5 items-end justify-center h-full px-5">
          <div className={`h-0.5 w-12 sm:w-14 md:w-20 ${lineColor}`}></div>
          <div className={`h-0.5 w-7 sm:w-9 md:w-10 ${lineColor}`}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
