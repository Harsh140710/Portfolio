  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/all";
  import gsap from "gsap";
  import { useRef } from "react";

  const Agency = () => {
    const imageDivRef = useRef(null);
    const imageRef = useRef(null);

    const ImageArray = [
      "image-1.jpg",
      "image-2.jpg",
      "image-3.jpg",
      "image-4.jpg",
      "image-5.jpg",
      "image-6.jpg",
      "image-7.jpg",
      "image-8.jpg",
      "image-9.jpg",
      "image-10.jpg",
      "image-11.jpg",
      // "Harsh.webp",
    ];

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: "top 27.8%",
          end: "top -50%",
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (e) => {
            let imgIndex;
            if (e.progress < 1) {
              imgIndex = Math.floor(e.progress * ImageArray.length);
            } else {
              imgIndex = ImageArray.length - 1;
            }
            imageRef.current.src = ImageArray[imgIndex];
          },
        },
      });
    });

    return (
      <div className=" overflow-x-hidden">
        <div className="section-1 relative py-1">
          <div
            ref={imageDivRef}
            className="absolute h-[25vh] md:h-[25vh] lg:h-[50vh] sm:w-[50vw] md:w-[40vw] lg:w-[20vw] rounded top-44 left-[30vw]"
          >
            <img
              ref={imageRef}
              src="Harsh.webp"
              className="object-cover rounded-2xl h-full w-full"
            />
          </div>
          <div className="relative font-['Personal-font-500']">
            <div className="mt-[55vh]">
              <h1 className="text-[18vw] font-extrabold text-center uppercase leading-[14vw] space-y-3">
                Master
                <br />
                <span className="space-y-10">Stack</span>
              </h1>
            </div>

            <div className="pl-[40%] mt-20">
              <p className="text-xl lg:text-[2.5vw] font-[Personal-font-300]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m
                a Full-Stack Developer specializing in the MERN stack, building
                scalable, high-performance web applications. I focus on clean
                architecture, reusable components, and optimized APIs. I also work
                with advanced tools like TanStack Query, TypeScript, PostgreSQL,
                and Neon to deliver modern, production-ready solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative section-2 h-screen mt-64 lg:mt-20 font-[Personal-font-300] z-30">
          <div className="flex items-start justify-around">
            <h2 className="text-2xl">Expertise</h2>

            <div className="flex flex-col text-2xl">
              <h2>Strategy</h2>
              <h2>Advertising</h2>
              <h2>Branding</h2>
              <h2>Design</h2>
              <h2>Content</h2>
            </div>

            <div></div>

          </div>
          <div className="mt-20 pl-10 pr-10 md:pl-30 lg:pl-30 lg:pr-30 flex-col lg:flex md:flex items-center justify-around gap-10">
            <h2 className="text-lg lg:text-2xl mb-5">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</h2>

            <div className="md:flex lg:flex flex-col text-lg lg:text-2xl mb-5">
              <h2>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</h2>
            </div>

            <div className="md:flex lg:flex flex-col text-lg lg:text-2xl">
              <h2>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</h2>
            </div>

          </div>
        </div>

        <div className="section-3 h-screen"></div>
      </div>
    );
  };

  export default Agency;
