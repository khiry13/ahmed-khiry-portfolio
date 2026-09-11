"use client";

import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Student Management System - Odoo",
      category: "odoo",
      description:
        "A custom Odoo module for managing students and training courses with attendance and grading systems",
      image: "/projects/student-management.jpg", // Place the image in public/projects
      tech: ["Python", "Odoo 17", "PostgreSQL", "XML", "QWeb"],
      github: "https://github.com/yourusername/student-management",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      category: "fullstack",
      description:
        "A complete dashboard for an online store with product, order, and customer management",
      image: "/projects/ecommerce-dashboard.jpg",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/yourusername/ecommerce-dashboard",
      demo: "https://your-demo.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "Visitor Tracking System - Odoo",
      category: "odoo",
      description:
        "A system for registering and tracking visitors at organizations with visitor badge printing",
      image: "/projects/visitor-tracking.jpg",
      tech: ["Python", "Odoo 16", "PostgreSQL", "Report Generation"],
      github: "https://github.com/yourusername/visitor-tracking",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      description:
        "A modern, interactive portfolio website built with Next.js and Tailwind CSS",
      image: "/projects/portfolio.jpg",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.vercel.app",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "odoo", label: "Odoo" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-30" />
      <div className="blur-circle w-96 h-96 bg-cyan-500 -bottom-48 left-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-light/60 mt-6 text-lg">
            A selection of work I have completed
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in stagger-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-dark/40 text-light/70 border border-primary/20 hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-hover bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden animate-slide-up stagger-${index + 3}`}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cyan-500/20 overflow-hidden group">
                {/* Placeholder if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold text-white/10">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark p-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-light mb-3">
                  {project.title}
                </h3>
                <p className="text-light/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/70 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12 animate-fade-in stagger-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-light/70 hover:text-primary transition-colors duration-300 text-lg"
          >
            <Github size={24} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
