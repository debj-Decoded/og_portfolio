import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, 
  FaGithub, FaFigma 
} from "react-icons/fa";
import { 
  IoLogoJavascript, IoLogoFirebase 
} from "react-icons/io5";
import { 
  RiTailwindCssFill, RiNextjsFill 
} from "react-icons/ri";
import { 
  SiMongodb, SiMysql, SiPostgresql, SiTypescript,
  SiExpress, SiRedux, SiDocker 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Experience = () => {
  const frontendSkills = [
    // { icon: FaHtml5, name: "HTML5", level: "Advanced", color: "text-orange-500" },
    { icon: FaCss3Alt, name: "CSS3", level: "Advanced", color: "text-blue-500" },
    { icon: IoLogoJavascript, name: "JavaScript", level: "Advanced", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", level: "Intermediate", color: "text-blue-600" },
    { icon: FaReact, name: "React", level: "Advanced", color: "text-cyan-400" },
    { icon: RiNextjsFill, name: "Next.js", level: "Intermediate", color: "text-white" },
    { icon: RiTailwindCssFill, name: "Tailwind", level: "Advanced", color: "text-cyan-300" },
    { icon: TbBrandReactNative, name: "React Native", level: "Intermediate", color: "text-cyan-400" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: "Node.js", level: "Advanced", color: "text-green-500" },
    { icon: SiExpress, name: "Express", level: "Advanced", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", level: "Intermediate", color: "text-green-600" },
    { icon: SiMysql, name: "MySQL", level: "Intermediate", color: "text-blue-400" },
    { icon: SiPostgresql, name: "PostgreSQL", level: "Basic", color: "text-blue-300" },
    { icon: FaJava, name: "Java", level: "Intermediate", color: "text-red-500" },
    { icon: IoLogoFirebase, name: "Firebase", level: "Intermediate", color: "text-yellow-500" },
    // { icon: SiDocker, name: "Docker", level: "Basic", color: "text-blue-500" },
  ];

  const SkillCard = ({ skill, index }) => (
    <div 
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${skill.color}`}>
          <skill.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-1">{skill.name}</h4>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div 
              className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ${
                skill.level === "Advanced" ? "w-[90%]" : skill.level === "Intermediate" ? "w-[70%]" : "w-[50%]"
              }`}
            ></div>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">{skill.level}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            What Skills I Have
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            My Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend */}
          <div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaReact className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
            </div>
            <div className="grid gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <FaNodeJs className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend Development</h3>
            </div>
            <div className="grid gap-4">
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;