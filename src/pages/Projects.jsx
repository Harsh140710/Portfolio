import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {

  return (
    <div className="p-4">
      <div className="pt-[20vh] lg:pt-[38vh]">
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-[6vw] uppercase">
          Projects
        </h2>
      </div>

      <div className="mt-6 lg:mt-3">
        <ProjectCard />
      </div>

      <div className="h-[40vh] lg:h-screen w-full"></div>
    </div>
  );
};

export default Projects;
