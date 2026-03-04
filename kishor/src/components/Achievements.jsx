import { Trophy, Code, FileText, Star, Target, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code size={24} />,
      title: "LeetCode Problem Solver",
      description: "Successfully solved 150+ algorithmic problems",
      metric: "150+",
      category: "Competitive Programming",
      color: "from-orange-400 to-rose-400"
    },
    {
      icon: <Target size={24} />,
      title: "CodeChef Contributor", 
      description: "Solved 200+ programming challenges",
      metric: "200+",
      category: "Problem Solving",
      color: "from-sky-400 to-indigo-400"
    },
    {
      icon: <Trophy size={24} />,
      title: "HackerRank Achiever",
      description: "Earned 5 certifications and 2 badges",
      metric: "4",
      category: "Certifications",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: <Award size={24} />,
      title: "Academic Excellence",
      description: "Maintained CGPA of 8.04 in B.Tech",
      metric: "8.04",
      category: "Education",
      color: "from-violet-400 to-pink-400"
    },
    {
      icon: <Star size={24} />,
      title: "Project Excellence",
      description: "Successfully completed 2 major full-stack projects",
      metric: "2",
      category: "Development",
      color: "from-teal-400 to-cyan-400"
    },
    {
      icon: <FileText size={24} />,
      title: "Professional Certifications",
      description: "Multiple industry-recognized certifications",
      metric: "5+",
      category: "Learning",
      color: "from-amber-400 to-orange-400"
    }
  ];

  const certifications = [
    {
      title: "Design and Analysis of Algorithm",
      issuer: "Udemy",
      year: "2024",
      type: "Algorithm Design"
    },
    {
      title: "SQL Query Basics",
      issuer: "Skill Lync",
      year: "2024", 
      type: "Database"
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      year: "2024",
      type: "Programming"
    },
    {
      title: "Joy of Computing using Python",
      issuer: "NPTEL",
      year: "2023",
      type: "Programming"
    }
  ];

  const hackathonAchievements = [
    {
      event: "Freshathon",
      position: "1st Position",
      description: "Intra College Hackathon 2024",
      year: "2024"
    },
    {
      event: "Java-DB Sprint Week Leap Project",
      position: "2nd Position", 
      description: "Intra College Project Expo 2024",
      year: "2024"
    },
    {
      event: "Mini Project Expo",
      position: "1st Position",
      description: "Intra College Project Expo 2025",
      year: "2025"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              Achievements
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognition and accomplishments in my journey
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-glow group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                    <span className="text-2xl font-bold text-primary">{achievement.metric}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="text-primary mr-3" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {cert.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons & Competitions */}
            <div className="card-glow">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Trophy className="text-accent mr-3" size={24} />
                Hackathons & Competitions
              </h3>
              <div className="space-y-4">
                {hackathonAchievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-accent/30 pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-foreground">{achievement.event}</h4>
                      <span className="text-xs text-muted-foreground">{achievement.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`text-sm font-medium px-2 py-1 rounded text-xs ${
                        achievement.position.includes('1st') 
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {achievement.position}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mt-16 card-glow">
            <h3 className="text-2xl font-bold mb-8 text-center">Quick Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Hackathon Wins</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">8.04</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;