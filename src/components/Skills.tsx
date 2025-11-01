import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Cloud, Database, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages & Frameworks",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "React.js", "Node.js", "HTML/CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["SQL", "MySQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "CI/CD", "DSA", "AI-DevOps", "Prometheus", "Grafana", "Istio"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
