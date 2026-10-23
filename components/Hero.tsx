"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Title Animation */}
          <div
            className={`space-y-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <p className="text-primary text-sm md:text-base font-semibold tracking-[0.24em] uppercase">
              Full Stack Developer · Odoo Specialist
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-normal text-light">
              Ahmed Khiry
            </h1>
            <h2 className="text-2xl md:text-4xl font-display text-light/80">
              Building useful digital products
            </h2>
            <p className="text-lg md:text-xl text-light/65 max-w-3xl mx-auto">
              Odoo ERP <span className="text-primary">/</span> React & Next.js{" "}
              <span className="text-primary">/</span> Node.js
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-lg text-light/60 max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}
          >
            I build modern web applications and custom Odoo ERP systems.
            Available for remote work and freelance projects.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 ${isVisible ? "animate-slide-up stagger-3" : "opacity-0"}`}
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary bg-primary hover:bg-primary/90 text-dark px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={20} />
            </button>
            <a
              href="#contact"
              className="bg-transparent border border-light/25 text-light hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center justify-center gap-6 ${isVisible ? "animate-fade-in stagger-4" : "opacity-0"}`}
          >
            <a
              href="https://github.com/khiry13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/60 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-khairy-b573aa361/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/60 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ahmedkhiry414@gmail.com"
              className="text-light/60 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Download CV */}
          <div
            className={`${isVisible ? "animate-fade-in stagger-5" : "opacity-0"}`}
          >
            <a
              href="/files/Ahmed_Khiry.pdf"
              download
              className="inline-flex items-center gap-2 text-light/70 hover:text-primary transition-colors duration-300 border-b border-light/30 hover:border-primary pb-1"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
