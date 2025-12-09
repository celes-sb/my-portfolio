const projects = [
  {
    name: "Professional Portfolio",
    description: "This portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    url: "https://github.com/celes-sb/my-portfolio",
  },
  {
    name: "Massage Business Website",
    description:
      "A professional website for my massage business using React and Python backend.",
    tech: ["React", "Tailwind CSS", "FastAPI"],
    url: "#",
  },
  {
    name: "Project 3",
    description: "Describe another key project here.",
    tech: ["Python", "React"],
    url: "#",
  },
  {
    name: "Project 4",
    description: "Another example project showcasing your skills.",
    tech: ["React", "FastAPI", "Tailwind CSS"],
    url: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm border rounded-full bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}