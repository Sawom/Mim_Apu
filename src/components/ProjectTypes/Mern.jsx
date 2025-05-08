import React from "react";
import app1 from "../../images/app/app1.png";
import app2 from "../../images/app/app2.png";
import app3 from "../../images/app/app3.png";
import app4 from "../../images/app/app4.png";
import app5 from "../../images/app/app5.png";
import app6 from "../../images/app/app6.png";
import web1 from "../../images/web/web1.png";
import web2 from "../../images/web/web2.png";
import web3 from "../../images/web/web3.png";
import web4 from "../../images/web/web4.png";
import web5 from "../../images/web/web5.png";

const projectData = [
  {
    title: "Lifestyle app",
    imageUrl: app1,
    link: "https://www.behance.net/gallery/169356351/Be-Better-a-lifestyle-app",
  },
  {
    title: "E Commerce Mobile APP",
    imageUrl: app2,
    link: "https://www.behance.net/gallery/149781811/E-Commerce-Mobile-APP",
  },
  {
    title: "Study Abroad Online Consultancy firm Mobile APP",
    imageUrl: app3,
    link: "https://www.behance.net/gallery/149781697/Study-Abroad-Online-Consultancy-firm-Mobile-APP-UI",
  },
  {
    title: "Travel APP",
    imageUrl: app4,
    link: "https://www.behance.net/gallery/149781481/Travel-APP",
  },
  {
    title: "Automatically Water Your Houseplants",
    imageUrl: app5,
    link: "https://www.behance.net/gallery/149583613/Automatically-Water-Your-Houseplants",
  },
  {
    title: "Mobile Dating App",
    imageUrl: app6,
    link: "https://www.behance.net/gallery/106143773/Mobile-Dating-App",
  },
  {
    title: "E-Commerce seller Profile",
    imageUrl: web1,
    link: "https://www.behance.net/gallery/133555985/E-Commerce-seller-Profile",
  },
  {
    title: "E Commerce Website",
    imageUrl: web2,
    link: "https://www.behance.net/gallery/110931325/E-Commerce-Website",
  },
  {
    title: "Online Consultancy to study abroad Website",
    imageUrl: web3,
    link: "https://www.behance.net/gallery/133703837/Online-Consultancy-to-study-abroad-Website",
  },
  {
    title: "Gym Fitness Web UI Design",
    imageUrl: web4,
    link: "https://www.behance.net/gallery/103639317/Gym-Fitness-Web-UI-Design",
  },
  {
    title: "Digital Marketing Web UI Design",
    imageUrl: web5,
    link: "https://www.behance.net/gallery/103638901/Digital-Marketing-Web-UI-Design",
  },
];

const Mern = () => {
  return (
    <div>
      <div className="mx-auto font-roboto container my-10">
        {/* element */}
        <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2 h-full"></div>
        <section className="py-16 px-6 bg-neutral-950">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projectData.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block overflow-hidden rounded-md shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#177BFF] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {project.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mern;
