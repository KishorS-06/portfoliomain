import { Code, Database, Globe, Smartphone, Settings, Brain, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"]
    },
    {
      icon: <Database size={24} />,
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "Microsoft Excel"]
    },
    {
      icon: <Settings size={24} />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Express.js", "RESTful APIs", "JWT", "Redux"]
    },
    {
      icon: <Brain size={24} />,
      title: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOPs", "Database Design"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Development Tools",
      skills: ["VS Code", "Postman", "Chrome DevTools", "Figma"]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Data Analytics & Business Analysis",
      skills: [
        "Python (Data Analysis)",
        "Tableau",
        "Power BI",
        "Microsoft Excel",
        "Data Visualization",
        "Data Cleaning",
        "Business Analysis",
        "Documentation"
      ]
    }
  ];

  const topSkills = [
    { name: "React", level: 90, color: "bg-sky-500" },
    { name: "JavaScript", level: 88, color: "bg-amber-400" },
    { name: "Node.js", level: 85, color: "bg-emerald-500" },
    { name: "MongoDB", level: 82, color: "bg-emerald-600" },
    { name: "Python", level: 80, color: "bg-indigo-500" },
    { name: "Java", level: 78, color: "bg-rose-500" },
    { name: "Tableau", level: 75, color: "bg-blue-500" },
    { name: "Power BI", level: 74, color: "bg-yellow-500" },
    { name: "Excel", level: 80, color: "bg-green-500" },
    { name: "MySQL", level: 72, color: "bg-orange-400" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="card-glow">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-item text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;