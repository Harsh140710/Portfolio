const FullScreenNav = () => {
  const navLinks = [
    {
      name: "Projects",
      description_1: "Full stack developer",
      description_2: "With newly skilled",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
    {
      name: "Agency",
      description_1: "Started New Agency",
      description_2: "As Freelancing",
      image_1: "image-1.jpg",
      image_2: "image-2.jpg",
    },
    {
      name: "Contact",
      description_1: "Contact me for",
      description_2: "freelancing projects",
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

  return (
    <div
      id="fullScreenNav"
      className="h-screen w-full py-28 absolute bg-black text-white"
    >
      <div id="allLinks" className="">
        {navLinks.map((e, index) => (
          <div
            className={`link relative ${
              index === navLinks.length - 1 ? "border-y" : "border-t"
            } border-white`}
            key={index}
          >
            <h1 className="font-[Personal-font-500] text-[5vw] uppercase text-center">
              {e.name}
            </h1>
            <div className=" moveLink absolute text-black bg-[#6edb1a] top-0 flex">
              <div className="moveX flex flex-nowrap items-center">
                <h2 className="whitespace-nowrap font-[Personal-font-500] text-[5vw] uppercase text-center">
                  {e.description_1}
                </h2>
                <img
                  src={e.image_1}
                  className="h-14 w-36 shrink-0 object-center rounded-full"
                />
                <h2 className="whitespace-nowrap font-[Personal-font-500] text-[5vw] uppercase text-center">
                  {e.description_2}
                </h2>
                <img
                  src={e.image_2}
                  className="h-14 w-36 shrink-0 object-center rounded-full"
                />
              </div>
              <div className="moveX flex flex-nowrap items-center">
                <h2 className="whitespace-nowrap font-[Personal-font-500] text-[5vw] uppercase text-center">
                  {e.description_1}
                </h2>
                <img
                  src={e.image_1}
                  className="h-14 w-36 shrink-0 object-center rounded-full"
                />
                <h2 className="whitespace-nowrap font-[Personal-font-500] text-[5vw] uppercase text-center">
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
  );
};

export default FullScreenNav;
