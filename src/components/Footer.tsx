import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/30 backdrop-blur">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built by Swaraj N B
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
