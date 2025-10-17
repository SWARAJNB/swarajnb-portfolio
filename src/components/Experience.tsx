import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    role: "AI-DevOps Engineer Intern",
    company: "Rooman Technologies",
    location: "Remote",
    period: "Oct 2024 - Mar 2025",
    description:
      "Worked on a Multi-Cloud Strategy Project, deploying applications across AWS, Azure, and GCP using Docker and Kubernetes. Leveraged Helm, Terraform, Prometheus, Grafana, Istio, Git, and GitHub for streamlined deployment, monitoring, security, and version control.",
    achievements: [
      "Successfully deployed multi-cloud infrastructure across AWS, Azure, and GCP",
      "Implemented monitoring and observability using Prometheus and Grafana",
      "Completed IBM-certified project on cloud-native DevOps practices",
      "Automated infrastructure provisioning using Terraform",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    role: "Full Stack Web Development Internship",
    company: "DOTCH ENDEAVOURS",
    location: "Mysore",
    period: "Oct 2023 - Nov 2023",
    description:
      "Gained hands-on experience in full-stack web development using HTML, CSS, JavaScript, React/Angular for the front end. Built server-side logic with Node.js, Java, Python, and MySQL, and integrated RESTful APIs.",
    achievements: [
      "Developed responsive web applications using React and Angular",
      "Built RESTful APIs with Node.js and integrated with MySQL databases",
      "Implemented authentication and authorization systems",
      "Collaborated with cross-functional teams on agile projects",
    ],
    color: "from-cyan-500 to-blue-600",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground">
            Real-world experience building scalable applications and cloud infrastructure
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} shrink-0`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-lg text-primary mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-foreground/90 mb-4 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
