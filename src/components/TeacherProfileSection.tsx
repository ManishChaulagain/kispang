import { Mail, Linkedin, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teachers = [
  {
    name: "विनोद न्यौपाने ",
    title: "निर्देशक/ शिक्षालय प्रमख",
    expertise: ["Master Degree in Public Health", "Educational Leadership"],
    email: "binodneupane510@gmail.com",
    description: "शिक्षालय प्रमख र निर्देशक जसले शैक्षिक नेतृत्व र स्वास्थ्य क्षेत्रमा विशेषज्ञता हासिल गरेका छन्।",
  },
  {
    name: "श्री बिर बल तामाङ ",
    title: "अध्यक्ष",
    expertise: ["गाउँपालिका अध्यक्ष", "सामाजिक कार्यकर्ता"],
    email: "cp@kispangmun.gov.np",
    description: "गाउँपालिका अध्यक्ष र सामाजिक कार्यकर्ता जसले समुदाय विकासमा महत्वपूर्ण योगदान पुर्याएका छन्।",
  }
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
