import React, { useRef, useState } from "react";
import { MdOutlineEmail, MdSend } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactOptions = [
    {
      icon: MdOutlineEmail,
      title: "Email",
      value: "debashishj18@gmail.com",
      link: "mailto:debashishj18@gmail.com",
      color: "from-red-500 to-pink-500",
      delay: "0"
    },
    {
      icon: AiOutlineInstagram,
      title: "Instagram",
      value: "Debashish Jena",
      link: "https://www.instagram.com/_.black_burry/",
      color: "from-purple-500 to-pink-500",
      delay: "100"
    },
    {
      icon: BsWhatsapp,
      title: "WhatsApp",
      value: "+919040413920",
      link: "https://api.whatsapp.com/send?phone=+919040413920",
      color: "from-green-500 to-emerald-500",
      delay: "200"
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      "service_56jnvjv",
      "template_iy74h4m",
      form.current,
      "QyvlaKeusfNwUk1BB"
    ).then(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      e.target.reset();
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-2 space-y-4" data-aos="fade-right">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={option.delay}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{option.title}</h4>
                  <p className="text-gray-400 text-sm">{option.value}</p>
                </div>
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="200">
            <form 
              ref={form} 
              onSubmit={sendEmail}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all peer"
                    placeholder="Your Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none"
                  >
                    Your Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all peer"
                    placeholder="Your Email"
                    id="email"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative group mb-6">
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none peer"
                  placeholder="Your Message"
                  id="message"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-gray-900 peer-focus:px-2 pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted 
                    ? 'bg-green-500' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]'
                }`}
              >
                {submitted ? (
                  <>
                    <BsCheckCircleFill className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <MdSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;