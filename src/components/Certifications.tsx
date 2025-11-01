import { Card } from "./ui/card";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI-DevOps Engineer",
      issuer: "Skill India through Rooman Technologies Pvt Ltd & IBM",
      date: "March 2025",
      description: "Comprehensive certification covering multi-cloud deployments, Docker, Kubernetes, and DevOps practices",
    },
    {
      title: "Python Certification",
      issuer: "Coding Ninjas",
      date: "May 2023",
      description: "Advanced Python programming and data structures",
    },
    {
      title: "I Tech Hackfest 2023 Participant",
      issuer: "CHRIST UNIVERSITY",
      date: "July 2023",
      description: "Participated in competitive hackathon event showcasing technical and problem-solving skills",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and recognitions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                  <p className="text-primary mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-foreground/70">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
