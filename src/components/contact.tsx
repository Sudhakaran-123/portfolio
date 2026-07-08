import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  MapPin,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative pt-28 pb-4 bg-slate-950 text-white overflow-hidden"

    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-5">
            Get In
            <span className="text-blue-400"> Touch</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-6" />

          <p className="text-slate-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            I'm always open to discussing new opportunities, freelance
            projects, collaborations, or innovative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-10">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Contact Information
            </h3>

            <p className="text-slate-400 leading-7 sm:leading-8 mb-8 sm:mb-10">
              Feel free to reach out if you're looking for a developer,
              have a project in mind, or simply want to connect.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href="mailto:sudhakaranmani2003@gmail.com"
                    className="block font-medium hover:text-blue-400 transition-colors break-all"
                  >
                    sudhakaranmani2003@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a
                    href="tel:+919597718611"
                    className="font-medium hover:text-blue-400 transition-colors"
                  >
                    +91 9597718611
                  </a>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Availability</p>
                  <p className="font-medium text-green-400">
                    Open to Opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">Hosur, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 sm:mt-10">
              <a
                href="https://github.com/Sudhakaran-123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sudhakaran-m-8273a2254"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none text-sm sm:text-base"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none text-sm sm:text-base"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 outline-none resize-none text-sm sm:text-base"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-[1.02]
                  transition-all
                  disabled:opacity-50
                "
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 p-4 rounded-xl text-center text-sm sm:text-base">
                  ✅ Message sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-xl text-center text-sm sm:text-base">
                  ❌ Failed to send message.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-8 pt-3 pb-1">
          <div className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Sudhakaran M. All Rights Reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;