import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Mic, Utensils, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: Mic,
    title: "Jarvis AI Voice Assistant",
    description: "An intelligent voice assistant built with Python featuring voice commands, task automation, music playback, and web browsing capabilities.",
    tech: ["Python", "Speech Recognition", "TTS", "Tkinter"],
  },
  {
    icon: Utensils,
    title: "Food Delivery Management System",
    description: "A full-stack food delivery platform with order management, database design, and real-time delivery tracking.",
    tech: ["Flask", "MySQL", "Python", "HTML/CSS"],
  },
  {
    icon: BarChart3,
    title: "Sales & Customer Analytics Dashboard",
    description: "An end-to-end data analysis project involving EDA, data cleaning, visualization, and actionable business insights from sales datasets.",
    tech: ["Python", "Pandas", "Matplotlib", "Power BI"],
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <div key={i} className="glass-card p-6 hover:border-primary/30 transition-all group hover:glow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg gradient-bg">
              <p.icon className="text-primary-foreground" size={22} />
            </div>
            <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
