import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/KishorS-06", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kishor-s-365706291", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kishorsakthinarayanan@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+919788114422", label: "Phone" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Internship", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div 
              className="text-2xl font-bold text-glow cursor-pointer"
              onClick={scrollToTop}
            >
              Kishor S<span className="text-accent"></span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and solving complex problems with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">kishorsakthinarayanan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span className="text-sm">+91 9788114422</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Currently pursuing B.Tech in Computer Science Engineering
              </p>
              <p className="text-sm text-primary font-semibold">
                Sri Eshwar College of Engineering
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;