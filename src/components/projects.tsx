import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Bus Pass Management System",
    description:
      "A digital platform for managing student bus pass applications, approvals, renewals, and status tracking. The system streamlines transportation management by reducing manual processes and improving operational efficiency.",
    image:
      "/images/bus-project.jpg",
    tech: ["React.js", "Python", "Flask", "MongoDB"],
  },
  {
    title: "Smart Tender Contract Management System",
    description:
      "A centralized solution for managing tender submissions, contract approvals, document workflows, and vendor communication. The platform improves transparency, accountability, and efficiency throughout the contract lifecycle.",
    image:
      "/images/tender-management.jpg",
    tech: ["React.js", "Python", "Flask", "MongoDB"],
  },
  {
    title: "E-Commerce Portal",
    description:
      "A modern e-commerce application featuring product browsing, category management, shopping cart functionality, order processing, and responsive user interfaces designed to deliver a seamless online shopping experience.",
    image:
      "/images/e-commerce1.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Featured
            <span className="text-blue-400"> Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6" />

          <p className="text-slate-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            A selection of projects demonstrating my expertise in
            full-stack development, scalable architectures, and
            user-focused application design.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-3xl
                overflow-hidden
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                transition-all
                duration-500
              "
            >
              {/* Project Number */}
              <div className="absolute top-5 right-5 z-20">
                <span className="text-5xl font-bold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/40
                    to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-blue-400
                      opacity-0
                      group-hover:opacity-100
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-all
                    "
                  />
                </div>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1.5
                        rounded-full
                        text-sm
                        bg-blue-500/10
                        border
                        border-blue-500/20
                        text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;