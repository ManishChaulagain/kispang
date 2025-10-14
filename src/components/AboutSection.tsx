import { BookOpen, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Comprehensive curriculum designed for academic excellence",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Dedicated teachers committed to student success",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Award-winning programs and achievements",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Preparing students for a connected world",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Our School
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence School has been a beacon of educational excellence for over 50 years, 
            nurturing young minds and building future leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-elevated transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
