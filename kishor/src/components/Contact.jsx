import { Mail, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aiz3hss",      // Service ID
        "template_f5gvzuy",     // Template ID
        form.current,
        { publicKey: "skwVeBnaHWw8Tb46O" } // Public Key (correct format)
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          alert("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss opportunities and collaborate on exciting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">

              <a href="tel:+919788114422" className="card-glow flex items-center p-4">
                <Phone className="mr-4 text-green-500" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91 9788114422</p>
                </div>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kishorsakthinarayanan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center p-4">
                <Mail className="mr-4 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">kishorsakthinarayanan@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/KishorS-06"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center p-4"
              >
                <Github className="mr-4" />
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-muted-foreground">github.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kishor-s-365706291"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-center p-4"
              >
                <Linkedin className="mr-4 text-blue-600" />
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com</p>
                </div>
              </a>

            </div>

            {/* Contact Form */}
            <div className="card-glow p-6">

              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="mr-3 text-primary" />
                Send a Message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 rounded-lg bg-secondary/50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 rounded-lg bg-secondary/50"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg bg-secondary/50"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-secondary/50"
                ></textarea>

                <button
                  type="submit"
                  className="btn-hero w-full flex justify-center items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;