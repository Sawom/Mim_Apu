import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import img from "../images/mim.jpg";

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
    <div className="flex  flex-col font-roboto justify-between h-screen w-72 bg-gray-900 text-white py-6 overflow-y-auto">
      <div>
        {/* Close Button on Small & Medium Devices */}
        <div className="lg:hidden flex justify-end px-4">
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <img
            src={img}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <h2 className="text-lg font-bold text-center">Jannatul Ferdousi</h2>
        </div>
        {/* section navigate */}
        <nav className="flex flex-col space-y-4 px-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                activeSection === id
                  ? " font-bold"
                  : "text-white hover:text-gray-300"
              }`}
              style={activeSection === id ? { color: "#177BFF" } : {}}
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
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jannatul-ferdousi-a037b0110/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </div>
        </div>
        <p>© 2025 Jannatul Ferdousi</p>
      </div>
    </div>
  );
};

export default Sidebar;
