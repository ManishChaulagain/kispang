import { GraduationCap, Microscope, Music, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: GraduationCap,
    title: "Academic Programs",
    description: "Rigorous curriculum from kindergarten through high school",
    color: "bg-primary",
  },
  {
    icon: Microscope,
    title: "STEM Education",
    description: "Advanced science, technology, engineering, and mathematics",
    color: "bg-secondary",
  },
  {
    icon: Music,
    title: "Arts & Music",
    description: "Creative expression through performing and visual arts",
    color: "bg-accent",
  },
  {
    icon: Palette,
    title: "Extracurricular",
    description: "Sports, clubs, and activities for holistic development",
    color: "bg-primary-light",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a wide range of programs designed to nurture every aspect of student growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${program.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-foreground">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
