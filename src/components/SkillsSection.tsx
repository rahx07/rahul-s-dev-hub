import SectionWrapper from "./SectionWrapper";
import { Code, Globe, Brain, Wrench, Users } from "lucide-react";

const categories = [
  { icon: Code, label: "Programming", skills: ["C", "C++", "Python"] },
  { icon: Globe, label: "Web", skills: ["HTML", "CSS", "JavaScript"] },
  { icon: Brain, label: "AI / ML", skills: ["ML Basics", "NumPy", "Neural Networks"] },
  { icon: Wrench, label: "Tools", skills: ["VS Code", "MySQL"] },
  { icon: Users, label: "Soft Skills", skills: ["Communication", "Teamwork", "Problem-Solving"] },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((c, i) => (
        <div key={i} className="glass-card p-6 hover:border-primary/30 transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <c.icon size={20} />
            </div>
            <h3 className="font-semibold text-foreground">{c.label}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {c.skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
