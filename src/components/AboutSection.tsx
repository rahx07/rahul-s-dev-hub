import SectionWrapper from "./SectionWrapper";
import { User } from "lucide-react";

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="glass-card p-8 md:p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg gradient-bg shrink-0">
          <User className="text-primary-foreground" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">Who I Am</h3>
          <p className="text-sm text-muted-foreground">Based in India</p>
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-4">
        I'm Rahul Ranjan — an aspiring AI & ML engineer currently pursuing my Master's in Computer Applications at Chandigarh University.
        I'm driven by a deep curiosity about how intelligent systems work and a strong desire to build technology that makes a difference.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        From developing voice assistants to designing full-stack web applications, I love turning ideas into functional products.
        When I'm not coding, you'll find me exploring the latest in machine learning research or collaborating on open-source projects.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;
