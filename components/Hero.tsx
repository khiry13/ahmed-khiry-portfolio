"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-8 text-left">
            <div
              className={`space-y-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            >
              <p className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                Full Stack Developer · Odoo Specialist
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-normal text-light">
                Ahmed Khiry
              </h1>
              <h2 className="text-2xl md:text-4xl font-display text-light/80">
                Building useful digital products
              </h2>
              <p className="text-lg md:text-xl text-light/65">
                Odoo ERP <span className="text-primary">/</span> React & Next.js{" "}
                <span className="text-primary">/</span> Node.js
              </p>
            </div>

            <p
              className={`text-lg text-light/60 max-w-xl leading-relaxed ${isVisible ? "animate-fade-in stagger-2" : "opacity-0"}`}
            >
              I build modern web applications and custom Odoo ERP systems.
              Available for remote work and freelance projects.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 ${isVisible ? "animate-slide-up stagger-3" : "opacity-0"}`}
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

            <div
              className={`flex items-center gap-6 ${isVisible ? "animate-fade-in stagger-4" : "opacity-0"}`}
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

          <div
            className={`relative mx-auto w-full max-w-[27rem] ${
              isVisible ? "animate-slide-up stagger-3" : "opacity-0"
            }`}
          >
            {/* Decorative frame */}
            {/* <div className="absolute -inset-3 translate-x-2 translate-y-2 rounded-full border border-primary/25" /> */}

            {/* Circular image */}
            <figure className="relative mx-auto aspect-square w-full max-w-[24rem] overflow-hidden rounded-full border border-white/10 bg-surface shadow-2xl">
              <Image
                src="/images/profile01.png"
                alt="Ahmed Khiry"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover object-[center_25%] transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
