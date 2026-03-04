import { ExternalLink, Github, Calendar, ShoppingCart, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Udemy Clone – Online Learning Platform",

      description:
        "A full-stack online learning platform inspired by Udemy that allows users to browse courses, enroll in programs, and track their learning progress. The platform includes secure authentication, video course streaming, and an intuitive dashboard for both students and instructors.",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "RESTful APIs",
      ],

      features: [
        "Secure user authentication and role-based authorization",
        "Course browsing and category-based filtering",
        "Video lecture streaming for enrolled courses",
        "Student dashboard to track course progress",
        "Instructor panel to upload and manage courses",
        "Responsive design for seamless learning across devices",
      ],

      icon: <ShoppingCart size={24} />,
      year: "2024",
      status: "Completed",
      gradient: "from-sky-400 to-indigo-500",

      github: "https://github.com/KishorS-06/subi",
      demo: "https://udemyclone-ashy.vercel.app/",
    },

    {
      title: "Crowd Sourced Disaster Management System",

      description:
        "An innovative disaster management platform that leverages crowd-sourcing to provide real-time updates during emergencies. Built with modern technologies for scalability and reliability.",

      technologies: [
        "Flutter",
        "Dart",
        "Geolocation API",
        "Push Notifications",
        "Real-time Updates",
        "Firebase",
      ],

      features: [
        "Real-time disaster reporting and updates",
        "Geolocation-based emergency alerts",
        "Crowd-sourced information verification",
        "Emergency contact and resource sharing",
        "Interactive disaster mapping",
        "Multi-platform accessibility",
      ],

      icon: <Shield size={24} />,
      year: "2025",
      status: "Completed",
      gradient: "from-emerald-400 to-teal-500",

      github: "https://github.com/KishorS-06/Relivapp",
      demo: "https://disaster-management-demo.vercel.app",
    },

    {
      title: "Startup Connect – Startup Collaboration Platform",

      description:
        "An innovative disaster management platform that leverages crowd-sourcing to provide real-time updates during emergencies. Built with modern technologies for scalability and reliability.",

      technologies: [
        "React.js",
        "Node.js",
        "AI Integration",
        "Business Analysis",
        "System Documentation",
      ],

      features: [
        "AI-powered startup–investor matching system",
    "Detailed BRD and FRD documentation for product workflows",
    "User dashboards for startups, mentors, and investors",
    "Structured test case design for system validation",
    "Platform workflow analysis and requirement gathering",
    "Scalable architecture for startup ecosystem networking",
      ],

      icon: <Shield size={24} />,
      year: "2026",
      status: "On-Going",
      gradient: "from-emerald-400 to-teal-500",

      github: "https://github.com/YOUR_USERNAME/disaster-management",
      demo: "https://www.figma.com/design/dPD9YF8a8F4aSjZu8LKJde/Untitled?node-id=0-1&p=f&t=OvfZB6Ua2y8S1KQG-0",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card p-8">

                <div className="grid lg:grid-cols-2 gap-8 items-start">

                  {/* Project Info */}
                  <div className="space-y-6">

                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {project.icon}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {project.year}
                          </span>

                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              project.status === "Completed"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Technologies Used:
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-item text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero flex items-center"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero-outline flex items-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>

                    </div>
                  </div>

                  {/* Features */}
                  <div className="card-glow">
                    <h4 className="font-semibold mb-4 text-foreground">
                      Key Features:
                    </h4>

                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <div className="card-glow max-w-2xl mx-auto p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>

              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring innovative
                technologies. Check out my GitHub for more repositories.
              </p>

              <a
                href="https://github.com/KishorS-06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center justify-center"
              >
                <Github size={18} className="mr-2" />
                View All Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;