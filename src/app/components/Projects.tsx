export function Projects() {
  const projects = [
    {
      name: "Algeria Cities Api",
      description: "A full-stack e-commerce solution with DJANGO REST FRAMEWORK",
      tech: ["DJANGO","DJANGO REST FRAMEWORK"],
      link: "https://algeria-cities.iyed.online/"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <span className="text-[#c586c0]">const</span>{' '}
        <span className="text-[#4ec9b0]">projects</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#4ec9b0]">Project</span>
        <span className="text-[#d4d4d4]">[] = [</span>
      </div>

      <div className="ml-8 space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="text-[#d4d4d4]">{'{'}</div>
            <div className="ml-8 space-y-2">
              <div>
                <span className="text-[#9cdcfe]">name</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">"{project.name}"</span>
                <span className="text-[#d4d4d4]">,</span>
              </div>
              <div>
                <span className="text-[#9cdcfe]">description</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">"{project.description}"</span>
                <span className="text-[#d4d4d4]">,</span>
              </div>
              <div>
                <span className="text-[#9cdcfe]">technologies</span>
                <span className="text-[#d4d4d4]">: [</span>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>
                    <span className="text-[#ce9178]">"{tech}"</span>
                    {techIndex < project.tech.length - 1 && <span className="text-[#d4d4d4]">, </span>}
                  </span>
                ))}
                <span className="text-[#d4d4d4]">],</span>
              </div>
              <div>
                <span className="text-[#9cdcfe]">link</span>
                <span className="text-[#d4d4d4]">: </span>
                <a
                  href={project.link}
                  className="text-[#ce9178] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "{project.link}"
                </a>
                <span className="text-[#d4d4d4]">,</span>
              </div>
              <div>
                <span className="text-[#9cdcfe]">status</span>
                <span className="text-[#d4d4d4]">: </span>
                <span className="text-[#ce9178]">"Completed"</span>
              </div>
            </div>
            <div className="text-[#d4d4d4]">
              {'}'}
              {index < projects.length - 1 && ','}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-[#d4d4d4]">];</div>
      
      <div className="mt-8">
        <span className="text-[#c586c0]">export default</span>{' '}
        <span className="text-[#4ec9b0]">projects</span>
        <span className="text-[#d4d4d4]">;</span>
      </div>
    </div>
  );
}
