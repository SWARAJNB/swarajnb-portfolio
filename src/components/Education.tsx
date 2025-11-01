import { Card } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "ACS College of Engineering, Bangalore",
      score: "CGPA: 7.5",
      period: "2021 - 2025",
      description: "Focus on Software Development, Cloud Computing, and AI/ML",
    },
    {
      degree: "Pre University",
      institution: "PU College",
      score: "Percentage: 83.3%",
      period: "2018 - 2020",
      description: "Science stream with Computer Science",
    },
    {
      degree: "SSLC",
      institution: "High School",
      score: "Percentage: 78%",
      period: "2018",
      description: "Secondary School Leaving Certificate",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            {educationData.map((item, index) => (
              <Card
                key={index}
                className="p-6 mb-6 bg-card border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group md:ml-16"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background group-hover:scale-125 transition-transform" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="text-primary font-semibold">{item.score}</span>
                    </div>
                    <p className="text-foreground/80 mb-2">{item.institution}</p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
