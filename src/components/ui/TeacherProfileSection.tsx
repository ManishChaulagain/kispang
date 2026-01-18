import { Mail, Linkedin, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teachers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Head of Mathematics",
    expertise: ["Calculus", "Statistics", "Advanced Mathematics"],
    email: "sarah.johnson@school.edu",
    description: "Ph.D. in Mathematics from MIT with 15 years of teaching experience.",
  },
  {
    name: "Prof. Michael Chen",
    title: "Science Department Lead",
    expertise: ["Physics", "Chemistry", "Research Methods"],
    email: "michael.chen@school.edu",
    description: "Former research scientist with numerous publications in peer-reviewed journals.",
  },
  {
    name: "Ms. Emily Rodriguez",
    title: "English Literature",
    expertise: ["Creative Writing", "Literature", "Poetry"],
    email: "emily.rodriguez@school.edu",
    description: "Award-winning author and passionate educator with a focus on creative expression.",
  },
  {
    name: "Mr. David Kim",
    title: "Computer Science",
    expertise: ["Programming", "AI", "Web Development"],
    email: "david.kim@school.edu",
    description: "Tech industry veteran bringing real-world coding experience to the classroom.",
  },
  {
    name: "Dr. Lisa Anderson",
    title: "History & Social Studies",
    expertise: ["World History", "Economics", "Political Science"],
    email: "lisa.anderson@school.edu",
    description: "Historian specializing in modern world history with a passion for civic education.",
  },
  {
    name: "Prof. James Williams",
    title: "Arts & Music",
    expertise: ["Music Theory", "Visual Arts", "Performance"],
    email: "james.williams@school.edu",
    description: "Professional musician and artist dedicated to nurturing creative talents.",
  },
];

const TeacherProfileSection = () => {
  return (
    <section id="teachers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            हाम्रो व्यवस्थापन टोली
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our dedicated team of experienced educators committed to student excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle className="text-foreground">{teacher.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {teacher.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {teacher.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Mail size={16} className="mr-2" />
                    Contact
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherProfileSection;
