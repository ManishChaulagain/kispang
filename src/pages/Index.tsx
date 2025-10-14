import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TeacherProfileSection from "@/components/TeacherProfileSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AboutSection />
      <ProgramsSection />
      <TeacherProfileSection />
      <Footer />
    </div>
  );
};

export default Index;
