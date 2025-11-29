import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiC, SiMysql, SiPostgresql } from "react-icons/si";

gsap.registerPlugin(Draggable);

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "NextJs", icon: <SiNextdotjs className="text-black" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQL", icon: <SiMysql className="text-gray-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
];

const Skills = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);
  const PADDING = 10; // padding from screen edges

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    skillRefs.current.forEach((el) => {
      const skillWidth = el.offsetWidth;
      const skillHeight = el.offsetHeight;

      const randomX = PADDING + Math.random() * (containerWidth - skillWidth - 2 * PADDING);
      const randomY = PADDING + Math.random() * (containerHeight - skillHeight - 2 * PADDING);

      el.style.position = "absolute";
      el.style.left = `${randomX}px`;
      el.style.top = `${randomY}px`;
      el.style.zIndex = 10;
    });

    gsap.from(skillRefs.current, {
      opacity: 0,
      scale: 0,
      rotation: 360,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });

    skillRefs.current.forEach((el) => {
      Draggable.create(el, {
        type: "x,y",
        bounds: container,
        inertia: true,
        edgeResistance: 0.65,
        onPress() {
          gsap.to(el, { scale: 1.1, duration: 0.2 });
        },
        onRelease() {
          gsap.to(el, { scale: 1, duration: 0.2 });
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen min-h-screen bg-gray-50 overflow-hidden"
    >
      <h1 className="relative z-20 text-3xl md:text-4xl font-bold text-gray-900 text-center mt-8">
        My Skills
      </h1>

      {skills.map((skill, index) => (
        <div
          key={index}
          ref={(el) => (skillRefs.current[index] = el)}
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-3 md:p-4 cursor-grab"
          style={{ width: 80, height: 80 }}
        >
          <div className="text-3xl md:text-4xl mb-1">{skill.icon}</div>
          <p className="text-gray-800 text-xs md:text-sm font-semibold text-center">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
