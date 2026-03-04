import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">
            Internship
          </span>
        </h2>

        {/* Card 1 */}
        <div className="card-glow flex gap-8 mb-14 relative">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-xl"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            <Briefcase size={26} className="text-primary-foreground" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">
              MERN Stack Intern
            </h3>

            <p className="text-sm font-medium mb-4 text-primary">
              BetterTomorrow
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Built a dynamic workflow management system with RESTful APIs,
              responsive React UI, and scalable MongoDB data handling to
              improve efficiency and reduce manual errors.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">Express.js</span>
              <span className="tech-item">React</span>
              <span className="tech-item">Node.js</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-glow flex gap-8 mb-14 relative">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-xl"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            <Briefcase size={26} className="text-primary-foreground" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">
              Java Full Stack Intern
            </h3>

            <p className="text-sm font-medium mb-4 text-primary">
              Rampex
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Developed end-to-end web modules using Spring Boot, React, and
              MySQL with REST APIs, improving system responsiveness and data
              processing efficiency.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="tech-item">Spring Boot</span>
              <span className="tech-item">React</span>
              <span className="tech-item">MySQL</span>
              <span className="tech-item">REST APIs</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-glow flex gap-8 relative">
          <div
            className="flex items-center justify-center w-16 h-16 rounded-xl"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)"
            }}
          >
            <Briefcase size={26} className="text-primary-foreground" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">
              Business Analyst Intern
            </h3>

            <p className="text-sm font-medium mb-4 text-primary">
              Business Analytics Internship (APP IMOVATION TECHNOLOGIES PVT. LTD.)
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Analyzed business data and created interactive dashboards to
              support decision-making. Worked with Python for data processing,
              Tableau and Power BI for visualization, and prepared detailed
              documentation and reports for business insights.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="tech-item">Python</span>
              <span className="tech-item">Tableau</span>
              <span className="tech-item">Power BI</span>
              <span className="tech-item">Data Analysis</span>
              <span className="tech-item">Documentation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;