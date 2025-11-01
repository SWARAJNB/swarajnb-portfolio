import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full-Stack Developer & AI-DevOps Engineer";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Swaraj N B
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Computer Science student passionate about building scalable web applications
              and cloud solutions. Experienced in multi-cloud deployments, AI integration,
              and full-stack development.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:swarajnb28@gmail.com">
                <Button variant="default" className="bg-gradient-to-r from-primary to-accent text-primary-foreground gap-2">
                  <Mail size={18} />
                  Email Me
                </Button>
              </a>
              <a href="tel:+917795115378">
                <Button variant="secondary" className="gap-2">
                  <Phone size={18} />
                  Call Me
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/swaraj-n-b-b91279286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-primary" />
              </a>
              <a
                href="https://github.com/swarajnb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-primary" />
              </a>
              <div className="p-3 bg-secondary rounded-lg flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-glow-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl animate-float">
                <img
                  src={profileImage}
                  alt="Swaraj N B"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
