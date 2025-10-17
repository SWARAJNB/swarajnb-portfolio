import { Card, CardContent } from "./ui/card";
import { Code, Database, Cloud, Workflow, Terminal, Server } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
    color: "from-purple-500 to-purple-700",
  },
  {
    category: "Frontend",
    icon: Terminal,
    skills: ["React", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PHP", "Apache", "RESTful APIs"],
    color: "from-green-500 to-emerald-600",
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL", "Firebase"],
    color: "from-orange-500 to-red-600",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    color: "from-indigo-500 to-violet-600",
  },
  {
    category: "Tools & Technologies",
    icon: Workflow,
    skills: ["Git & GitHub", "Jenkins/CI/CD", "Selenium", "Helm", "Prometheus", "Grafana", "Istio"],
    color: "from-pink-500 to-rose-600",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
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

export default Skills;
