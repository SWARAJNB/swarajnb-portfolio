import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swarajnb28@gmail.com",
    href: "mailto:swarajnb28@gmail.com",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7795115378",
    href: "tel:+917795115378",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    color: "from-green-500 to-emerald-600",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swaraj-n-b-945a87226/",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/swarajnb",
    color: "from-gray-700 to-gray-900",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground">
            Let's discuss how I can contribute to your team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const CardWrapper = contact.href ? 'a' : 'div';
              return (
                <CardWrapper
                  key={index}
                  {...(contact.href && { href: contact.href })}
                  className="block"
                >
                  <Card
                    className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in cursor-pointer h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${contact.color} mb-4`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{contact.label}</h3>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>

          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br ${social.color} text-white font-medium hover:shadow-glow transition-all duration-300 animate-scale-in`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </a>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => window.open("/Swaraj_NB(resume).pdf", "_blank")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.5s" }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Available for full-time opportunities starting 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
