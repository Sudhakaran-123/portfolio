import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaPython />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST API", icon: <FaNodeJs /> },
      { name: "JWT Authentication", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Database",
    icon: <SiMongodb />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "SourceTree", icon: <FaGitAlt /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.35em] text-sm font-semibold">
            My Skills
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Technologies &
            <span className="text-blue-400"> Tools</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6" />

          <p className="text-slate-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Technologies and tools I use to build modern, scalable,
            and high-performance web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group
                relative
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-3xl
                p-8
                hover:border-blue-500/50
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                transition-all
                duration-500
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-500/0
                  to-cyan-500/0
                  group-hover:from-blue-500/5
                  group-hover:to-cyan-500/5
                  transition-all
                  duration-500
                "
              />

              <div className="relative">
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl text-blue-400">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        gap-4
                        p-3
                        rounded-xl
                        bg-slate-800/40
                        border
                        border-transparent
                        hover:bg-slate-800
                        hover:border-blue-500/30
                        hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    >
                      <div className="text-2xl text-blue-400 animate-bounce">
                        {skill.icon}
                      </div>

                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mt-16">
          {[
            {
              value: "2+",
              label: "Years Experience",
            },
            {
              value: "5+",
              label: "Projects Built",
            },
            {
              value: "15+",
              label: "Technologies",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-slate-800
                rounded-2xl
                p-6
                text-center
                hover:border-blue-500/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <h4 className="text-4xl font-bold text-blue-400">
                {item.value}
              </h4>

              <p className="text-slate-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;