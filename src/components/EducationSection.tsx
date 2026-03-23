import SectionWrapper from "./SectionWrapper";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Chandigarh University",
    degree: "MCA (AI & ML)",
    period: "2025 – 2027",
    details: "Coursework: Machine Learning, Neural Networks, Data Science, Advanced Algorithms",
  },
  {
    school: "Indian Institute of Business Management",
    degree: "BCA",
    period: "2021 – 2024",
    details: "CGPA: 7.84 / 10",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education">
    <div className="grid md:grid-cols-2 gap-6">
      {education.map((e, i) => (
        <div key={i} className="glass-card p-6 hover:border-primary/30 transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <GraduationCap size={20} />
            </div>
            <span className="text-sm text-muted-foreground font-mono">{e.period}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{e.school}</h3>
          <p className="text-primary font-medium text-sm mb-3">{e.degree}</p>
          <p className="text-muted-foreground text-sm">{e.details}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
