import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      description: "Full-Stack Development & AI-DevOps Engineering",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.E in Computer Science (7.5 CGPA)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certifications",
      description: "Python, AI-DevOps, IBM Certified",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              Computer Science and Engineering student at ACS College of Engineering, Bangalore with a strong
              foundation in full-stack web development and cloud technologies. I've gained hands-on experience
              through internships at Dutch Endeavours and Rooman Technologies, where I worked on cutting-edge
              projects involving multi-cloud deployments, AI integration, and DevOps practices.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              My expertise spans across modern web technologies, cloud platforms (AWS, Azure, GCP), and
              containerization tools. I'm particularly passionate about building scalable applications and
              implementing efficient CI/CD pipelines. Currently working on innovative projects like TOW ME,
              an AI-driven decentralized platform for adaptive ride transportation.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-secondary border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-primary-foreground">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
