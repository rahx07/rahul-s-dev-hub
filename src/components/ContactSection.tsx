import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
          </p>
          <div className="space-y-4">
            {[
              { icon: Mail, text: "rahuldj2003@gmail.com", href: "mailto:rahuldj2003@gmail.com" },
              { icon: Phone, text: "+91 7903986178", href: "tel:+917903986178" },
              { icon: MapPin, text: "India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={18} />
                </div>
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="gradient-bg px-8 py-3 rounded-full font-medium text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
