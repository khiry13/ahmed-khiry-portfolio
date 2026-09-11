"use client";

import { Code2, Briefcase, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description:
        "Experience building complete web applications with modern technologies",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Odoo Specialist",
      description:
        "Developing and customizing Odoo ERP modules for businesses and organizations",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Code Quality",
      description:
        "Writing clean, maintainable code while following best practices",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Remote Ready",
      description:
        "Available for remote work and collaboration with international teams",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in stagger-2">
          <div className="bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-light/80 leading-relaxed mb-6">
              I am a Full Stack Developer specializing in modern web
              applications and custom Odoo ERP systems. I am passionate about
              programming and solving complex technical problems.
            </p>
            <p className="text-lg text-light/80 leading-relaxed mb-6">
              I primarily work with{" "}
              <span className="text-primary font-semibold">
                React, Next.js, Node.js
              </span>{" "}
              across the frontend and backend, with deep experience in{" "}
              <span className="text-cyan-400 font-semibold">
                Odoo Framework
              </span>{" "}
              using Python and PostgreSQL.
            </p>
            <p className="text-lg text-light/80 leading-relaxed">
              I am currently looking for remote opportunities and freelance
              projects where I can contribute my experience to building
              innovative, effective software solutions.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`card-hover bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center animate-slide-up stagger-${index + 3}`}
            >
              <div className="text-primary mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-light mb-2">
                {item.title}
              </h3>
              <p className="text-light/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
