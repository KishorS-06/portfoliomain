import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "../assets/IDHU.jpeg";

const Hero = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >

      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-8 text-center md:text-left">

            <div className="space-y-3">
              <p className="text-lg text-muted-foreground font-mono">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-glow">
                Kishor S
              </h1>

            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              B.Tech Computer Science and Business Systems student with a CGPA
              of 8.04, specializing in - 
              <span className="text-lg md:text-l font-semibold text-accent-glow">
               MERN stack development </span> and -
              <span className="text-lg md:text-l font-semibold text-accent-glow">Business
              Analytics</span>. Passionate about building innovative web applications,
              analyzing data-driven insights, and solving complex real-world
              problems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center items-center">

              <button
                onClick={scrollToAbout}
                className="btn-hero"
              >
                View My Work
              </button>

              <button
                onClick={scrollToContact}
                className="btn-hero-outline"
              >
                Contact Me
              </button>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6">

              <a
                href="tel:+919788114422"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Phone size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kishorsakthinarayanan@gmail.com"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://github.com/KishorS-06"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/kishor-s-365706291"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">

              <img
                src={profileImg}
                alt="Kishor portrait"
                className="w-full h-full object-cover object-center"
              />

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/30"></div>

            </div>

          </div>

        </div>

        {/* SCROLL DOWN ICON */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
          >
            <ArrowDown size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;