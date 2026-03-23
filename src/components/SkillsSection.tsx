import SectionWrapper from "./SectionWrapper";
import { Code, Globe, Brain, Wrench, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    icon: Code,
    label: "Programming",
    skills: [
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
      { name: "Python", level: 80 },
    ],
  },
  {
    icon: Globe,
    label: "Web",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    icon: Brain,
    label: "AI / ML / Data",
    skills: [
      { name: "ML Basics", level: 70 },
      { name: "NumPy / Pandas", level: 72 },
      { name: "Neural Networks", level: 55 },
      { name: "Data Visualization", level: 75 },
      { name: "EDA & Statistics", level: 68 },
    ],
  },
  {
    icon: Wrench,
    label: "Tools",
    skills: [
      { name: "VS Code", level: 90 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    icon: Users,
    label: "Soft Skills",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 80 },
      { name: "Problem-Solving", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full gradient-bg"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((c, i) => (
        <div key={i} className="glass-card p-6 hover:border-primary/30 transition-colors group">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <c.icon size={20} />
            </div>
            <h3 className="font-semibold text-foreground">{c.label}</h3>
          </div>
          <div className="space-y-3">
            {c.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
