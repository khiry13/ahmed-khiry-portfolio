"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-primary",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Prisma ORM", level: 85 },
        { name: "Zustand", level: 85 },
        { name: "Zod", level: 85 },
        { name: "responsive design", level: 95 },
      ],
    },
    {
      title: "Backend",
      color: "text-primary",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "Python", level: 90 },
        { name: "REST API design and integration", level: 90 },
        { name: "WebSockets", level: 85 },
        { name: "FastAPI", level: 75 },
        { name: "JWT", level: 75 },
        { name: "OTP and password-reset flows", level: 75 },
      ],
    },
    {
      title: "Odoo ERP",
      color: "text-primary",
      skills: [
        { name: "Odoo 17/18/19", level: 90 },
        { name: "Custom Module Development", level: 90 },
        { name: "ORM and computed fields", level: 85 },
        { name: "Odoo XML/Views", level: 85 },
        { name: "OWL components and dashboards", level: 85 },
        { name: "QWeb PDF reports", level: 85 },
        { name: "security groups and record rules", level: 85 },
        { name: "Workflow Customization", level: 80 },
      ],
    },
    {
      title: "Languages",
      color: "text-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "PHP", level: 85 },
        { name: "SQL", level: 85 },
        { name: "XML", level: 85 },
      ],
    },
    {
      title: "Databases:",
      color: "text-primary",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 60 },
        { name: "MongoDB (Mongoose)", level: 95 },
      ],
    },
    {
      title: "Tools & Others",
      color: "text-primary",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker (Basics)", level: 60 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Linux/Ubuntu", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-normal text-light mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-light/60 mt-6 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`card-hover bg-surface border border-white/10 rounded-2xl p-8 animate-slide-up stagger-${catIndex + 2}`}
            >
              <h3
                className={`text-2xl font-bold ${category.color} mb-6 flex items-center gap-2`}
              >
                <span className="w-3 h-3 rounded-full bg-current" />
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-light font-medium">
                        {skill.name}
                      </span>
                      {/* <span className="text-light/60 text-sm">
                        {skill.level}%
                      </span> */}
                    </div>
                    <div className="w-full bg-dark rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: "slideIn 1s ease-out forwards",
                          animationDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in stagger-6">
          <div className="bg-surface border border-white/10 rounded-xl p-6 inline-block">
            <p className="text-light/70">
              🚀 Always learning and improving | 💡 Passionate about modern
              technologies
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
