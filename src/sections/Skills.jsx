export default function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "JavaScript",
    "HTML/CSS",
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border rounded-full bg-gray-100 hover:bg-blue-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
