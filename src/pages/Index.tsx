import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ParticlesBackground />
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
