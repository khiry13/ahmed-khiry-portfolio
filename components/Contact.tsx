"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Add a submission API here when one is available (EmailJS, Formspree, etc.).
    // This is a simple local submission example.
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+20 123 456 7890",
      href: "tel:+201234567890",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Alexandria, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="blur-circle w-96 h-96 bg-primary top-0 left-0" />
      <div className="grid-background absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-light/60 mt-6 text-lg">
            Have a project or an idea? Let us talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up stagger-2">
            <div className="bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-light mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/60 border border-primary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-light/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/60 border border-primary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-light/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/60 border border-primary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-light/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark/60 border border-primary/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "✓ Sent successfully"
                  ) : (
                    <>
                      Send <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up stagger-3">
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-light mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 text-light/70 hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="text-primary mt-1 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-medium text-light mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-dark/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-light mb-6">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-dark/60 border border-primary/20 p-4 rounded-lg text-light/70 ${social.color} transition-all duration-300 hover:scale-110 hover:border-primary/50`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-2xl p-8 text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for Work
                </div>
                <p className="text-light/80 leading-relaxed">
                  I am currently looking for remote opportunities and freelance
                  projects. Let us build something great together! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
