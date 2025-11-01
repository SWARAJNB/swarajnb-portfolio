import { Card } from "./ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "AI-DevOps Engineer Intern",
      company: "Rooman Technologies",
      period: "Oct 2024 - Mar 2025",
      description: "Worked on Multi-Cloud Strategy Project, deploying applications across AWS, Azure, and GCP using Docker and Kubernetes. Leveraged Helm, Terraform, Prometheus, Grafana, Istio, Git, and GitHub for streamlined deployment, monitoring, security, and version control. Successfully completed an IBM-certified project.",
      achievements: [
        "Implemented multi-cloud deployment strategy",
        "Automated infrastructure with Terraform",
        "Set up comprehensive monitoring with Prometheus and Grafana",
        "Completed IBM certification project"
      ],
    },
    {
      role: "Full Stack Web Development Intern",
      company: "Dutch Endeavours, Mysore",
      period: "Oct 2023 - Nov 2023",
      description: "Gained hands-on experience in full-stack web development using modern technologies. Built responsive front-end interfaces and developed server-side logic with proper API integration.",
      achievements: [
        "Developed full-stack applications using React/Angular",
        "Implemented server-side logic with Node.js, Java, and Python",
        "Integrated RESTful APIs and MySQL databases",
        "Collaborated with team on multiple projects"
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground/70">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
