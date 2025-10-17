import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-48 h-48 border-4 border-primary/50 shadow-neon animate-float">
              <AvatarImage src="/src/assets/profile.jpg" alt="Swaraj N B" />
              <AvatarFallback className="text-4xl bg-gradient-primary text-primary-foreground">SN</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Swaraj N B
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Full Stack Developer & AI-DevOps Engineer
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Bangalore, India</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12 leading-relaxed">
            Computer Science Engineering student at ACS College of Engineering with expertise in
            full-stack web development, cloud technologies, and AI-DevOps. Passionate about building
            scalable solutions across AWS, Azure, and GCP.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("/Swaraj_NB(resume).pdf", "_blank")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/swaraj-n-b-945a87226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/swarajnb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:swarajnb28@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
