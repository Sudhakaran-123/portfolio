const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            About Me
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Turning Ideas Into
            <span className="text-blue-400"> Digital Solutions</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6" />
        </div>

        {/* Main Content */}
        <div
          className="
            bg-slate-900/40
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-8
            md:p-12
          "
        >
          <p className="text-lg text-slate-300 leading-9 mb-8">
            I am a Full Stack Developer with 2+ years of professional experience
            building scalable web applications and business solutions using React.js,
            JavaScript, Python, Flask, and MongoDB. I enjoy transforming ideas into
            efficient, user-friendly, and high-performing digital products.
          </p>

          <p className="text-lg text-slate-400 leading-9 mb-8">
            Throughout my professional journey, I have worked on administration
            portals, workflow management systems, grievance management platforms,
            bus pass management systems, educational applications, and business
            dashboards. These diverse projects have enhanced my ability to design
            intuitive user interfaces, develop robust backend services, and deliver
            scalable solutions that address real-world business needs.
          </p>

          <p className="text-lg text-slate-400 leading-9">
            I am passionate about continuous learning, clean code practices, and
            creating meaningful user experiences. My goal is to build innovative
            applications that not only meet business requirements but also provide
            exceptional value to end users.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400">2+</h3>
            <p className="mt-3 text-slate-400">
              Years of Professional Experience
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400">5+</h3>
            <p className="mt-3 text-slate-400">
              Successful Projects Delivered
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 transition-all duration-300">
            <h3 className="text-5xl font-bold text-blue-400">100%</h3>
            <p className="mt-3 text-slate-400">
              Commitment to Quality & Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;