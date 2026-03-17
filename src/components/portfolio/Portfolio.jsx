import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaGithub, FaExternalLinkAlt, FaReact, FaAngular, FaNode } from "react-icons/fa";
import { toast } from "react-toastify";

import { SiFigma, SiReactos } from "react-icons/si";
import toursImg from "../../assets/img/tours.png";
import calorieapp from "../../assets/img/calorieapp.png";
import angularPage from "../../assets/img/angularPage.png";
import ecommerce from "../../assets/img/ecommerce.png";
// import portfolio4 from "../../assets/img/portfolio4.jpg";
import aiResumeBuilder from "../../assets/img/aiResumeBuilder.png";
import portfolio2 from "../../assets/img/portfolio2.jpg";
import ME2 from "../../assets/img/Gemini_Generated_Image_818o7s818o7s818o.png";
const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Tour Booking Platform",
      description: "A stunning tour booking website using React with modern UI/UX design and real-time availability.",
      image: toursImg,
      github: "https://github.com/debj-Decoded/Tour_booking.git",
      demo: "https://tour-booking-sooty.vercel.app/",
      tags: ["React", "Node.js", "MongoDB"],
      icon: FaReact,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      title: "Angular Template System",
      description: "Build Faster with Angular's Modern Template System and lazy loading architecture.",
      image: angularPage,
      github: "https://github.com/debj-Decoded/angular-template-app.git",
      demo: "https://angular-template-app.vercel.app",
      tags: ["Angular", "TypeScript", "RxJS"],
      icon: FaAngular,
      color: "from-red-500 to-pink-500"
    },

    {
      id: 3,
      title: "AI Diet Planner",
      description: "Full Stack App with React Native & Expo featuring AI-powered meal recommendations.",
      image: calorieapp,
      github: "https://github.com/debj-Decoded/Ai-cal-app.git",
      demo: "http://ai-cal-app-landing-page.vercel.app/",
      tags: ["React Native", "AI", "Expo"],
      icon: SiReactos,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A full‑stack e‑commerce platform built with the MERN stack, featuring secure authentication, dynamic product management, and seamless shopping cart with real‑time order tracking",
      image: ecommerce,
      github: "https://github.com/debj-Decoded/ecommerce-Mern-new.git",
      demo: "http://ecommerce-mern-new-7rh8.vercel.app/",
      tags: ["MERN", "Redux", "Stripe"],
      icon: FaNode,
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 5,
      title: "AI Resume Builder",
      description: "Crafting professional resumes with AI-powered precision and real-time customization features.",
      image: aiResumeBuilder,
      github: "https://github.com/debj-Decoded/Ai-resume-web-front-end.git",
      demo: false,
      tags: ["React", "Firebase", "PWA"],
      icon: FaReact,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Design System Under process....",
      description: "Under Process.",
      image: portfolio2,
      github: "http://github.com",
      demo: false,
      tags: ["Figma", "UI/UX", "Design"],
      icon: SiFigma,
      color: "from-purple-500 to-pink-500"
    },

  ];

  return (
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            My Recent Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <LazyLoadImage
                  src={project.image}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                {/* Tech Icon Badge */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-blue-500/20 transition-all`}
                    >
                      Demo
                    </a>
                  ) : (
                    <button
                      onClick={() => toast.success("Deployment under process Checkout Github")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-blue-500/20 transition-all`}
                    >
                      Demo
                    </button>
                  )}

                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} hover:shadow-lg hover:shadow-blue-500/20 transition-all`}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a> */}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;