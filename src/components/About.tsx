import { Code2, Cloud, Database, Workflow } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expert in React, Node.js, and modern web frameworks",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Expertise",
    description: "Proficient with AWS, Azure, and GCP deployments",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Strong skills in SQL, MySQL, and MongoDB",
  },
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    description: "Docker, Kubernetes, Jenkins, and automation tools",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a passionate Computer Science Engineering student at ACS College of Engineering, Bangalore, 
              graduating in 2025 with a strong CGPA of 7.5. My journey in technology has been driven by 
              curiosity and a desire to solve real-world problems through innovative software solutions.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              With hands-on experience from internships at Dutch Endeavours and Rooman Technologies, I've 
              developed expertise in full-stack web development and AI-DevOps engineering. I've worked on 
              cutting-edge projects involving multi-cloud deployments, blockchain technology, and secure 
              communication systems.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My goal is to leverage my technical skills and passion for innovation to contribute to 
              impactful projects that push the boundaries of what's possible in technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
