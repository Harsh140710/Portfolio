import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { useRef } from "react";
import { NavBarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const navLinks = [
    {
      name: "Projects",
      description_1: "See Everything",
      description_2: "See Everything",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
    {
      name: "Agency",
      description_1: "Know us",
      description_2: "Know us",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
    {
      name: "Contact",
      description_1: "Send me a mail",
      description_2: "Send me a mail",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
    {
      name: "Skills",
      description_1: "Full stack developer",
      description_2: "Master in MERN stack",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
  ];

  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavBarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to(".fullScreenNav", {
      display: "block",
    });

    tl.to(".stairing", {
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".navLink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".navLink", {
      opacity: 0,
    });
    tl.to(".fullScreenNav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },[navOpen]
  );

  return (
    <>
      <div
        ref={fullScreenRef}
        id="fullScreenNav"
        className="fullScreenNav hidden h-screen w-full z-50 overflow-hidden absolute text-white"
      >
        <div className="h-screen w-full fixed">
          <div className="h-full w-full flex">
            <div className="stairing h-full w-1/5 bg-black "></div>
            <div className="stairing h-full w-1/5 bg-black "></div>
            <div className="stairing h-full w-1/5 bg-black "></div>
            <div className="stairing h-full w-1/5 bg-black "></div>
            <div className="stairing h-full w-1/5 bg-black "></div>
          </div>
        </div>
        <div ref={fullNavLinkRef} className="relative">
          <div className="navLink flex items-center w-full justify-between">
            <div className="-mt-16 ml-3.5">
              <h1 className="text-6xl font-bold text-white">Harsh</h1>
            </div>
            <div
              onClick={() => setNavOpen(false)}
              className="relative h-32 w-32 cursor-pointer"
            >
              <div className="absolute h-46 w-0.5 -rotate-45 origin-top bg-[#eee]"></div>
              <div className="absolute h-46 w-0.5 right-0 rotate-45 origin-top bg-[#eee]"></div>
            </div>
          </div>
          <div id="allLinks" className="">
            {navLinks.map((e, index) => (
              <div
                className={`link relative ${
                  index === navLinks.length - 1 ? "border-y" : "border-t"
                } border-white`}
                key={index}
              >
                <h1 className="font-semibold text-[5vw] uppercase text-center">
                  {e.name}
                </h1>
                <div className="moveLink absolute text-black bg-[#6edb1a] top-0 flex">
                  <div className="moveX flex flex-nowrap items-center">
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] uppercase text-center">
                      {e.description_1}
                    </h2>
                    <img
                      src={e.image_1}
                      className="h-14 w-36 shrink-0 object-center rounded-full"
                    />
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] uppercase text-center">
                      {e.description_2}
                    </h2>
                    <img
                      src={e.image_2}
                      className="h-14 w-36 shrink-0 object-center rounded-full"
                    />
                  </div>
                  <div className="moveX flex flex-nowrap items-center">
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] uppercase text-center">
                      {e.description_1}
                    </h2>
                    <img
                      src={e.image_1}
                      className="h-14 w-36 shrink-0 object-center rounded-full"
                    />
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] uppercase text-center">
                      {e.description_2}
                    </h2>
                    <img
                      src={e.image_2}
                      className="h-14 w-36 shrink-0 object-center rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;
