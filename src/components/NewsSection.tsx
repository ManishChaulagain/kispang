import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    title: "Annual Science Fair Winners Announced",
    date: "March 15, 2024",
    category: "Events",
    description: "Congratulations to our talented students who showcased innovative projects at the annual science fair.",
  },
  {
    title: "New Sports Complex Opening",
    date: "March 10, 2024",
    category: "Facilities",
    description: "State-of-the-art sports facilities now open for student use, featuring Olympic-sized pool and modern gymnasium.",
  },
  {
    title: "International Exchange Program Launch",
    date: "March 5, 2024",
    category: "Programs",
    description: "Students now have the opportunity to participate in cultural exchange programs with partner schools worldwide.",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Latest News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings and achievements at our school
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {item.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="group">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
