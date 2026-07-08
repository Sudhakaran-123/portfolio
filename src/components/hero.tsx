import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full">
            {/* Intro */}
            <p className="text-slate-400 text-lg mb-3">Hello, I'm</p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6">
              <span className="text-white">Sudhakaran</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                M
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-slate-400 text-lg md:text-xl mb-4">
              Building modern web applications with clean UI and scalable
              solutions.
            </p>

            {/* Animated Role */}
            <div className="text-2xl md:text-3xl font-bold h-12 mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "React.js Developer",
                    2000,
                    "Python & Flask Developer",
                    2000,
                    "Frontend Engineer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>

            {/* Accent Line */}
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-8" />

            {/* Description */}
            <p className="text-slate-400 text-lg leading-9 w-full mb-10">
              Full Stack Developer with 2+ years of professional experience
              building modern web applications using React.js, JavaScript,
              Python, Flask, and MongoDB.
              <br />
              <br />
              Passionate about creating intuitive user experiences, developing
              scalable backend systems, and delivering high-quality solutions
              that solve real-world business challenges.
            </p>

            {/* Single Button */}
            <div className="mb-10">
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
    group
    flex items-center gap-2
    px-8 py-4
    rounded-xl
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    font-semibold
    shadow-lg
    shadow-blue-500/20
    hover:scale-105
    transition-all
    duration-300
  "
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="
      group-hover:translate-x-1
      transition
    "
                />
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div
              className="
      relative
      rounded-3xl
      p-2
      bg-slate-900/80
      backdrop-blur-xl
      border
      border-slate-800
      shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-2
    "
            >
              <div className="relative rounded-[22px] overflow-hidden">
                <img
                  src="/images/profile2.png"
                  alt="Sudhakaran"
                  className="
          w-[260px]
          sm:w-[290px]
          lg:w-[330px]
          object-cover
          transition-all
          duration-500
          hover:scale-105
        "
                />

                {/* Bottom Label */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          right-0
          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent
          p-6
        "
                >
                  <h3 className="text-white text-xl font-bold">Sudhakaran M</h3>

                  <p className="text-slate-300 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
