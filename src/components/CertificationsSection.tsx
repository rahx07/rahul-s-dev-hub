import SectionWrapper from "./SectionWrapper";
import { Award } from "lucide-react";

const certs = [
  { title: "RealityX AI-FEST 2026 Bootcamp", subtitle: "XR Technologies" },
  { title: "Rising Star Award", subtitle: "GyanDhan – 2025" },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications" title="Certifications & Awards">
    <div className="grid sm:grid-cols-2 gap-6">
      {certs.map((c, i) => (
        <div key={i} className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-colors">
          <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
            <Award size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
