import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {

  return (
    <div className="p-4">
      <div className="pt-[20vh] lg:pt-[36vh]">
        <h2 className="font-semibold text-5xl lg:text-[6vw] uppercase">
          Projects
        </h2>
      </div>
      <div className="mt-10 lg:mt-0">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
