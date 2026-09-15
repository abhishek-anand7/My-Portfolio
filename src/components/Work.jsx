const projects = [
  {
    title: "Job Application Tracker",
    year: "2026",
    description:
      "A full-stack application for tracking job applications using a Kanban-style workflow, authentication and MongoDB.",
    stack: "Next.js, React, JavaScript, MongoDB",
    github: "https://github.com/yourusername/job-application-tracker",
    demo: "https://your-job-tracker.vercel.app",
  },
  {
    title: "Focus Mode Extension",
    year: "2026",
    description:
      "A browser extension designed to reduce distractions and help users maintain focus while working online.",
    stack: "JavaScript, HTML, CSS",
    github: "https://github.com/yourusername/focus-mode-extension",
    demo: "https://your-focus-mode-demo.com",
  },
  {
    title: "Project Three",
    year: "2026",
    description:
      "A modern web application built to solve a practical problem with a clean and responsive interface.",
    stack: "React, JavaScript, Tailwind CSS",
    github: "https://github.com/yourusername/project-three",
    demo: "https://project-three.vercel.app",
  },
  {
    title: "Project Four",
    year: "2026",
    description:
      "A full-stack project demonstrating API development, database integration and authentication.",
    stack: "Node.js, Express.js, MongoDB",
    github: "https://github.com/yourusername/project-four",
    demo: "https://project-four.vercel.app",
  },
];

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <h2 className="section-title">selected work</h2>

        <div>
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-head">
                <div className="project-title">
                  {project.title}
                </div>

                <div className="project-year">
                  {project.year}
                </div>
              </div>

              <p className="project-desc">
                {project.description}
              </p>

              <p className="project-stack">
                {project.stack}
              </p>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;