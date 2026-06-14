import {
  GraduationCap,
  School,
  Calendar,
} from "lucide-react";

const education = [
  {
    title: "Bachelor of Engineering (Computer Science and Engineering)",
    institution: "Adhiyamaan College of Engineering, Hosur",
    year: "2020 - 2024",
    percentage: "8.5 CGPA",
    icon: <GraduationCap size={32} />,
    description:
      "Graduated in Computer Science and Engineering with a strong foundation in software development, web technologies, database systems, and problem-solving. Actively worked on academic and real-world projects to strengthen technical expertise.",
  },
  {
    title: "Higher Secondary Education (Bio-Maths)",
    institution: "Sri Raghavendra Matric Higher Secondary School, Salem",
    year: "2019 - 2020",
    percentage: "86%",
    icon: <School size={32} />,
    description:
      "Completed Higher Secondary education with a specialization in Biology and Mathematics, developing analytical thinking, logical reasoning, and a strong academic foundation.",
  },
  {
    title: "Secondary School Education",
    institution: "Meenakshi Ramasamy Matric Higher Secondary School, Ariyalur",
    year: "2017 - 2018",
    percentage: "88%",
    icon: <School size={32} />,
    description:
      "Successfully completed secondary education with excellent academic performance, building a solid foundation in mathematics, science, and critical thinking skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Education
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Education &
            <span className="text-blue-400"> Qualifications</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6" />

          <p className="text-slate-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            A summary of my academic achievements and the educational
            foundation that supports my career in software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
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
                p-8
                text-center
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

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="
                    w-20 h-20
                    mx-auto mb-6
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-500/10
                    to-cyan-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                    group-hover:scale-110
                    transition-all
                    duration-500
                  "
                >
                  {item.icon}
                </div>

                <div className="flex justify-center gap-3 mb-5 flex-wrap">
                  <div
                    className="
      inline-flex
      items-center
      gap-2
      px-4 py-2
      rounded-full
      bg-slate-800
      text-slate-300
      text-sm
    "
                  >
                    <Calendar size={15} />
                    {item.year}
                  </div>

                  <div
                    className="
      px-4 py-2
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/20
      text-blue-400
      text-sm
      font-medium
    "
                  >
                    {item.percentage}
                  </div>
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                {/* Institution */}
                <p className="text-blue-400 font-medium mb-5">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="text-slate-400 leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Education;