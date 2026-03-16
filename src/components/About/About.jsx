import React from "react";
// import ME2 from "../../assets/img/Gemini_Generated_Image_818o7s818o7s818o.png";
import ME2 from "../../assets/img/Gemini_Generated_Image_818o7s818o7s818o.png";

import { FaAward, FaCode, FaRocket } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  const stats = [
    { icon: FaAward, label: "Experience", value: "1+ Years", delay: "0" },
    { icon: VscFolderLibrary, label: "Projects", value: "20+ Completed", delay: "100" },
    { icon: FaCode, label: "Technologies", value: "15+ Mastered", delay: "200" },
    { icon: FaRocket, label: "Deployments", value: "50+ Live", delay: "300" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            Get To Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Fluid Animation */}
          <div className="relative flex justify-center" data-aos="zoom-in" data-aos-duration="1200">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated Blob Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-morph shadow-2xl shadow-blue-500/30"></div>
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden animate-morph bg-gray-900">
                <LazyLoadImage 
                  src={ME2} 
                  alt="Debashish Jena" 
                  effect="blur"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Available
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                  data-aos="flip-up"
                  data-aos-delay={stat.delay}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>
                  <stat.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h5 className="text-2xl font-bold text-white mb-1">{stat.value}</h5>
                  <small className="text-gray-400">{stat.label}</small>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                A versatile, hardworking individual, driven to meet or exceed a company's expectations to deliver high-quality software products. I focus on building <span className="text-blue-400 font-semibold">responsive</span>, <span className="text-purple-400 font-semibold">performant</span>, and <span className="text-pink-400 font-semibold">accessible</span> user experiences using modern JavaScript frameworks.
              </p>
            </div>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
            >
              <span className="relative z-10">Let's Talk</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          50% { border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%; }
          75% { border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%; }
        }
        .animate-morph {
          animation: morph 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;