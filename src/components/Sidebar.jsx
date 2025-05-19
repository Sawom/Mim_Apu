import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";
import img from "../images/app/mim.jpeg";

const sections = [
  { id: "home", label: "Home" },
  { id: "whyme", label: "Why Me?" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Work Process" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Sidebar = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
      className="relative flex flex-col font-roboto justify-between h-screen w-72 bg-black text-white py-6 overflow-y-auto"
      style={{ paddingTop: "70px" }}
    >
      {/* Right vertical line */}
      <div className="absolute top-[21px] bottom-[1px] right-0 w-[1px] bg-[#232323]"></div>

      {/* Rest of your sidebar content */}
      <div>
        {/* Close Button on Small & Medium Devices */}
        <div className="lg:hidden flex justify-end px-4">
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col  space-y-2 mb-8 px-10">
          <img
            src={img}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <h2 className="text-lg font-bold ">
            JANNATUL <br /> FERDOUSI
          </h2>
        </div>
        {/* section navigate */}
        <nav className="flex flex-col space-y-4 px-10">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                activeSection === id
                  ? " font-bold underline decoration-[#0077FF] decoration-2"
                  : "text-white hover:text-gray-300"
              }`}
              style={activeSection === id ? { color: "#ffffff" } : {}}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400 px-4">
        <div className="flex justify-center gap-4 mb-2">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/ferdousi.mim.947741/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/jannatul-ferdousi-a037b0110/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white text-sm" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-sm" />
            </a>
            <a
              href="https://www.behance.net/jannatulferdous2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="text-white text-sm" />
            </a>
          </div>
        </div>
        <p>© 2025 Jannatul Ferdousi</p>
      </div>
    </div>
  );
};

export default Sidebar;
