import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";
import { ScrambleText } from "@/components/ScrambleText";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("victorzion1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading justify-center mb-12"
        data-num="05."
      >
        <ScrambleText text="What's Next?" />
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full border border-border rounded-xl overflow-hidden bg-background shadow-2xl relative text-left"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-muted border-b border-border">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
            <Terminal size={14} /> say_hello.sh
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
          <div className="mb-6">
            <span className="text-muted-foreground">#!/bin/bash</span>
            <br />
            <span className="text-primary">echo</span> <span className="text-foreground">"Let's Connect"</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-10 font-sans">
            I'm always open to new opportunities, collaborations, or just a good conversation about AI,
            backend systems, or navigating a tech career. Whether you have a question or just want to
            say hi, my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
            <a
              href="mailto:victorzion1@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary/10 border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/20 transition-colors duration-200"
            >
              <Terminal size={16} /> ./send_email.sh
            </a>
            
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-border text-foreground px-8 py-4 rounded font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />} 
              {copied ? "copied_to_clipboard" : "copy_address"}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}