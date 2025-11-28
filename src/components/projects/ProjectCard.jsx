const ProjectCard = () => {
  const projects = [
    { title: "Restaurent Managment System", image: "image-2.jpg" },
    { title: "College Managment System", image: "image-3.jpg" },
    { title: "Interest Calculator", image: "image-4.jpg" },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-[600px] gap-4 mb-5">
      {projects.map((e) => (
        <div className="relative group w-full cursor-pointer hover:rounded-3xl transition-all hover:scale-102 overflow-hidden h-full">
          <img src={e.image} className="object-fill h-full w-full" />
          <div className="opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/50">
            <h2 className="text-white uppercase border rounded-full font-semibold text-4xl px-5 py-2">
              {e.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
