import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TOW ME - AI-Driven Transportation Platform",
      description: "A decentralized unified platform for adaptive ride transportation using blockchain and AI technologies. Features real-time ride matching, secure payment processing, and intelligent route optimization.",
      technologies: ["Blockchain", "AI", "Python", "Flask", "React", "Firebase", "Google Maps API"],
      status: "In Progress",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Multi-Cloud Deployment System",
      description: "Implemented a comprehensive multi-cloud strategy using Docker and Kubernetes across AWS, Azure, and GCP. Ensures scalability, high availability, and vendor independence with automated infrastructure management.",
      technologies: ["Docker", "Kubernetes", "Terraform", "Helm", "Prometheus", "Grafana", "Istio"],
      status: "Completed",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Steganography & Cryptography System",
      description: "Developed a secure communication system that embeds encrypted messages within image and audio files using LSB steganography and AES encryption, ensuring data confidentiality in media transmission.",
      technologies: ["Python", "OpenCV", "PyCrypto", "NumPy", "Pillow"],
      status: "Completed",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Pharmacy Management System",
      description: "A comprehensive database-driven application for managing pharmacy operations including inventory, sales, and prescriptions. Features robust data security and follows normalization principles for optimal performance.",
      technologies: ["SQL", "PHP", "Apache", "MySQL"],
      status: "Completed",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4 group-hover:h-3 transition-all`} />
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold pr-4">{project.title}</h3>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="flex-shrink-0">
                  {project.status}
                </Badge>
              </div>

              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 transition-colors cursor-default text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
