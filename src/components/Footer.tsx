import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4 md:px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Rahul Ranjan. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/rahul-ranjan07" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/rahx07" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
