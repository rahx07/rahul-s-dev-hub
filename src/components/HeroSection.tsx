import { motion } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import { useEffect, useState } from "react";
import rahulPhoto from "@/assets/rahul-photo.jpg";

const roles = ["AI & ML Engineer", "Software Developer", "Problem Solver"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-28">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-10 blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
          >
            <span className="gradient-text">Rahul Ranjan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 h-8"
          >
            <span className="font-mono">{displayed}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-sm md:text-base"
          >
            Passionate MCA student specializing in Artificial Intelligence and Machine Learning
            with hands-on experience in building real-world projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a href="#projects" className="gradient-bg px-7 py-2.5 rounded-full font-medium text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm">
              View Projects <ArrowDown size={15} />
            </a>
            <a href="#contact" className="px-7 py-2.5 rounded-full font-medium border border-border hover:border-primary/50 text-foreground transition-colors flex items-center gap-2 text-sm">
              Contact Me <Send size={15} />
            </a>
            <a href="/Rahul_Ranjan_Resume.pdf" download className="px-7 py-2.5 rounded-full font-medium border border-border hover:border-accent/50 text-foreground transition-colors flex items-center gap-2 text-sm">
              Resume <Download size={15} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow">
              <img src={rahulPhoto} alt="Rahul Ranjan" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-float pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
