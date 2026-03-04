import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
              Get to know more about my background and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Personal Info */}
            <div className="space-y-6">
              <div className="card-glow">
                <h3 className="text-2xl font-bold mb-6 text-primary">About</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate B.Tech Computer Science And Business Systems student at Sri Eshwar College of Engineering 
                  with a strong foundation in full-stack development. My journey in technology started 
                  with curiosity and has evolved into a deep passion for creating innovative web solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in the MERN stack and have hands-on experience building dynamic, 
                  user-friendly applications. My approach combines technical excellence with 
                  creative problem-solving to deliver impactful digital experiences.
                </p>
              </div>
            </div>

            {/* Right Side - Education & Experience */}
            <div className="space-y-6">
              {/* Education */}
              <div className="card-glow">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">B.TECH (Computer Science And Business Systems)</h4>
                    <p className="text-sm text-primary font-semibold">CGPA: 8.04/10</p>
                    <p className="text-sm text-muted-foreground">Sri Eshwar College of Engineering</p>
                    <p className="text-sm text-muted-foreground">2023-2027</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">HSC</h4>
                    <p className="text-sm text-muted-foreground">P.K.D Matriculation Hr.Sec School</p>
                    <p className="text-sm text-muted-foreground">2021-2023</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">SSLC</h4>
                    <p className="text-sm text-primary font-semibold">Pass</p>
                    <p className="text-sm text-muted-foreground">2020-2021</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center card-glow">
              <div className="text-3xl font-bold text-primary mb-2">8.04</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center card-glow">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-muted-foreground">LeetCode Problems</div>
            </div>
            <div className="text-center card-glow">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">CodeChef Problems</div>
            </div>
            <div className="text-center card-glow">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;