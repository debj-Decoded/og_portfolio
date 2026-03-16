import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "#home", icon: AiOutlineHome, label: "Home" },
    { id: "#about", icon: AiOutlineUser, label: "About" },
    { id: "#experience", icon: BiBook, label: "Experience" },
    { id: "#portfolio", icon: RiServiceLine, label: "Portfolio" },
    { id: "#contact", icon: BiMessageSquareDetail, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down
      setIsVisible(window.scrollY > 100);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            className={`relative group p-3 rounded-xl transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;