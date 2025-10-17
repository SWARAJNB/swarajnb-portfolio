import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const educationData = [
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "ACS College of Engineering, Bangalore",
    period: "2021 - 2025",
    grade: "CGPA: 7.5",
    icon: GraduationCap,
  },
  {
    degree: "Pre University (12th)",
    institution: "Pre University College",
    period: "2018 - 2020",
    grade: "Percentage: 83.3%",
    icon: Award,
  },
  {
    degree: "SSLC (10th)",
    institution: "Secondary School",
    period: "2018",
    grade: "Percentage: 78%",
    icon: Award,
  },
];

const certifications = [
  {
    title: "AI-DevOps Engineer",
    issuer: "Skill India through Rooman Technologies Pvt Ltd & IBM",
    date: "March 2025",
  },
  {
    title: "Python Certification",
    issuer: "Coding Ninjas",
    date: "May 2023",
  },
  {
    title: "I Tech Hackfest 2023",
    issuer: "CHRIST UNIVERSITY",
    date: "July 2023",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <edu.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-secondary" />
              Certifications & Achievements
            </h3>
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-card animate-scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-secondary">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
