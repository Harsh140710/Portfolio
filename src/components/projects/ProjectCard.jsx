import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProjectCard = () => {
  const projects = [
    { title: "Restaurent Managment System", image: "image-2.jpg" },
    { title: "College Managment System", image: "image-3.jpg" },
    { title: "Interest Calculator", image: "image-4.jpg" },
    { title: "Interest Calculator", image: "image-8.jpg" },
    { title: "College Managment System", image: "image-3.jpg" },
    { title: "Restaurent Managment System", image: "image-2.jpg" },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "250px",
      scrollTrigger: {
        trigger: ".card",
        start: "top 100%",
        end: "top -50%",
        scrub: true,
      },
    });
  });

  return (
    <div
      className="hero w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-2 auto-rows-[230px] sm:auto-rows-[300px] md:auto-rows-[380px] lg:h-[920px] mb-5
      "
    >
      {projects.map((e, index) => (
        <div
          key={index}
          className="card relative group w-full cursor-pointer overflow-hidden h-full hover:rounded-3xl transition-all hover:scale-102
          "
        >
          {/* FIX: Perfect scaling on mobile/tablet */}
          <img src={e.image} className="object-cover h-full w-full" />

          <div
            className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/50
            "
          >
            <h2
              className="text-white uppercase border rounded-full font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 md:px-5 py-2
              "
            >
              {e.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
