import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "swarajnb28@gmail.com",
      href: "mailto:swarajnb28@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7795115378",
      href: "tel:+917795115378",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/swaraj-n-b-b91279286/",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/swarajnb",
      gradient: "from-gray-600 to-gray-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block"
              >
                <Card
                  className="p-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">{item.label}</h3>
                  <p className="text-muted-foreground text-center break-all">{item.value}</p>
                </Card>
              </a>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-card to-secondary border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button
                    variant="secondary"
                    className="gap-2 group-hover:scale-105 transition-transform"
                  >
                    <div className={`bg-gradient-to-br ${social.gradient} rounded-md p-1`}>
                      <div className="text-white">{social.icon}</div>
                    </div>
                    {social.label}
                  </Button>
                </a>
              ))}
            </div>
            <div className="text-center">
              <a href="/Swaraj_NB_resume.pdf" download>
                <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                  Download Resume
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
