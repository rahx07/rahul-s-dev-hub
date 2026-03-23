import SectionWrapper from "./SectionWrapper";
import { Briefcase, CheckCircle } from "lucide-react";

const responsibilities = [
  "Managed 40–60 daily leads with CRM",
  "Improved workflow using Google Sheets",
  "Built strong client relationships",
  "Ensured smooth loan processing",
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience">
    <div className="glass-card p-6 md:p-8 hover:border-primary/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg gradient-bg">
            <Briefcase className="text-primary-foreground" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Pre-Sales Executive</h3>
            <p className="text-primary font-medium text-sm">GyanDhan</p>
          </div>
        </div>
        <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">Dec 2024 – June 2025</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {responsibilities.map((r, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">{r}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
