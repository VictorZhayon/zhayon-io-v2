import { FixedSidebar } from "@/components/FixedSidebar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { CareerNotesSection } from "@/components/sections/CareerNotesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FixedSidebar />
      <main className="lg:ml-[35%] lg:max-w-[65%] px-6 sm:px-12 lg:px-16 xl:px-24 pt-20 lg:pt-0">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <WritingSection />
        <CareerNotesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
