import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Swaraj N B
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & AI-DevOps Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/swaraj-n-b-b91279286/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} className="text-primary" />
            </a>
            <a
              href="https://github.com/swarajnb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={20} className="text-primary" />
            </a>
            <a
              href="mailto:swarajnb28@gmail.com"
              className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} className="text-primary" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> © {currentYear} Swaraj N B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
