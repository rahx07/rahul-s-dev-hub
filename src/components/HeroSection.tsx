import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { useEffect, useState } from "react";

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
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-10 blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
        >
          <span className="gradient-text">Rahul Ranjan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 h-8"
        >
          <span className="font-mono">{displayed}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate MCA student specializing in Artificial Intelligence and Machine Learning
          with hands-on experience in building real-world projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="gradient-bg px-8 py-3 rounded-full font-medium text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2">
            View Projects <ArrowDown size={16} />
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full font-medium border border-border hover:border-primary/50 text-foreground transition-colors flex items-center gap-2">
            Contact Me <Send size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
