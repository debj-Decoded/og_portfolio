import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/privacy-policy", label: "Privacy" },
    { to: "/term-condition", label: "Terms" },
    { to: "/refund", label: "Refund" },
    { to: "/shipping", label: "Shipping" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = [
    { icon: FaFacebookF, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: FaInstagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: FaTwitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { icon: FaGithub, href: "https://github.com", color: "hover:bg-gray-700" },
    { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-white/10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Debashish Jena
            </h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all ${social.color} hover:text-white hover:border-transparent`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Debashish Jena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;