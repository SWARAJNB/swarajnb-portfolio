import { ExternalLink, Github, Lock, Database, Truck, Cloud } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Multi-Cloud Deployment with Docker & Kubernetes",
    description:
      "Implemented a multi-cloud strategy using Docker and Kubernetes across AWS, Azure, and GCP to ensure scalability, availability, and vendor independence. Used Terraform for infrastructure automation, Helm for Kubernetes management, and integrated Prometheus, Grafana, and Istio for monitoring and traffic control.",
    technologies: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Helm", "Prometheus", "Grafana", "Istio"],
    icon: Cloud,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "TOW ME - AI-Driven Ride Transportation",
    description:
      "An AI-Driven Decentralized Unified Platform for Adaptive Ride Transportation. Currently in progress, this project leverages blockchain technology and AI to create an innovative transportation solution.",
    technologies: ["Blockchain", "AI", "Python", "Flask", "React", "Firebase", "Google Maps API"],
    icon: Truck,
    color: "from-purple-500 to-pink-600",
    status: "In Progress",
  },
  {
    title: "Steganography and Cryptography in Media Files",
    description:
      "Developed a secure communication system by embedding encrypted messages within image and audio files using steganography (LSB technique) and cryptography (AES encryption). Ensures data confidentiality and undetectability in media transmission.",
    technologies: ["Python", "OpenCV", "PyCrypto", "NumPy", "Pillow"],
    icon: Lock,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Pharmacy Management System",
    description:
      "A database-driven application for managing pharmacy operations, including inventory, sales, and prescriptions. Uses SQL, PHP, and Apache to ensure data security, integrity, and efficient transactions. Follows normalization (1NF, 2NF, 3NF) to eliminate redundancy and improve performance.",
    technologies: ["SQL", "PHP", "Apache", "MySQL", "Database Design"],
    icon: Database,
    color: "from-orange-500 to-red-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground">
            Innovative solutions demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  {project.status && (
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
