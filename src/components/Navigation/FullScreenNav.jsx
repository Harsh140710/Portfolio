import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { useRef } from "react";
import { NavBarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

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
      description_1: "Know about me",
      description_2: "Know about me",
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
        document.body.classList.add("overflow-hidden");
        gsapAnimation();
      } else {
        document.body.classList.remove("overflow-hidden");
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <>
      <div
        ref={fullScreenRef}
        id="fullScreenNav"
        className="
    fullScreenNav hidden h-screen w-full
    z-50 overflow-hidden absolute text-white
  "
      >
        <div className="h-screen w-full fixed">
          <div className="h-full w-full flex">
            <div className="stairing h-full w-1/5 bg-black max-md:w-1/3"></div>
            <div className="stairing h-full w-1/5 bg-black max-md:w-1/3"></div>
            <div className="stairing h-full w-1/5 bg-black max-md:w-1/3"></div>
            <div className="stairing h-full w-1/5 bg-black max-md:hidden"></div>
            <div className="stairing h-full w-1/5 bg-black max-md:hidden"></div>
          </div>
        </div>

        <div ref={fullNavLinkRef} className="relative w-full h-full">
          <div
            className="
        navLink flex items-center justify-between
        w-full px-6 pt-6
        max-md:px-4 max-md:pt-4
      "
          >
            <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl font-bold">
              Harsh
            </h1>

            <div
              onClick={() => setNavOpen(false)}
              className="relative cursor-pointer h-32 w-32 max-md:h-16 max-md:w-16"
            >
              <div className="absolute h-full w-[3px] -rotate-45 bg-white left-1/2 -translate-x-1/2"></div>
              <div className="absolute h-full w-[3px] rotate-45 bg-white left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <div
            id="allLinks"
            className="
        w-full h-[calc(100vh-120px)]
        max-md:h-[calc(100vh-80px)]
        flex flex-col
        justify-center
      "
          >
            {navLinks.map((e, index) => (
              <Link
              to={`/${e.name.toLowerCase()}`}
                key={index}
                className={`
            link relative w-full
            ${index === navLinks.length - 1 ? "border-y" : "border-t"}
            border-white
          `}
              >
                <h1
                  className="
              font-semibold uppercase text-center
              text-[5vw] max-lg:text-[6vw] max-md:text-[9vw]
            "
                >
                  {e.name}
                </h1>

                <div className="moveLink absolute top-0 flex overflow-hidden bg-[#6edb1a] text-black">
                  <div className="moveX flex flex-nowrap items-center">
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] max-md:text-[9vw] uppercase">
                      {e.description_1}
                    </h2>

                    <img
                      src={e.image_1}
                      className="h-14 w-36 shrink-0 object-cover rounded-full"
                    />

                    <h2 className="whitespace-nowrap font-semibold text-[5vw] max-md:text-[9vw] uppercase">
                      {e.description_2}
                    </h2>

                    <img
                      src={e.image_2}
                      className="h-14 w-36 shrink-0 object-cover rounded-full"
                    />
                  </div>

                  <div className="moveX flex flex-nowrap items-center">
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] max-md:text-[9vw] uppercase">
                      {e.description_1}
                    </h2>
                    <img
                      src={e.image_1}
                      className="h-14 w-36 shrink-0 object-cover rounded-full"
                    />
                    <h2 className="whitespace-nowrap font-semibold text-[5vw] max-md:text-[9vw] uppercase">
                      {e.description_2}
                    </h2>
                    <img
                      src={e.image_2}
                      className="h-14 w-36 shrink-0 object-cover rounded-full"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;
