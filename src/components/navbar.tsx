import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());

    if (element) {
      const navbarHeight = 10;

      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-4
            rounded-2xl
            bg-slate-900/60
            backdrop-blur-2xl
            border
            border-slate-800
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <div
            onClick={() => scrollToSection("Home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              <span className="text-white">Sudhakaran</span>
              <span className="text-blue-400 ml-2">M</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {menus.map((menu) => (
                <li
                  key={menu}
                  onClick={() => scrollToSection(menu)}
                  className="
                    relative
                    px-4
                    py-2
                    text-slate-300
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:text-white
                    group
                  "
                >
                  {menu}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:w-3/4
                      group-hover:left-[12.5%]
                    "
                  />
                </li>
              ))}
            </ul>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              text-white
              p-2
              rounded-lg
              hover:bg-slate-800
              transition
            "
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${open ? "max-h-[500px] mt-3" : "max-h-0"}
          `}
        >
          <div
            className="
              bg-slate-900/95
              backdrop-blur-2xl
              border
              border-slate-800
              rounded-2xl
              p-4
              shadow-xl
            "
          >
            <ul className="flex flex-col gap-3">
              {menus.map((menu) => (
                <li
                  key={menu}
                  onClick={() => scrollToSection(menu)}
                  className="
                    text-center
                    py-3
                    rounded-xl
                    text-slate-300
                    font-medium
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;