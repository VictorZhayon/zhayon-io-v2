import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Terminal } from "lucide-react";
import { headlines } from "@/constants/data";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <h1 className="sr-only">Victor Zion — Software Engineer | Technical Writer</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl border border-border rounded-xl overflow-hidden bg-background shadow-2xl relative"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-muted border-b border-border">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
            <Terminal size={14} /> zhayon-io — bash
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
          <div className="flex gap-2 mb-2 text-muted-foreground">
            <span className="text-primary">victor@zhayon</span>
            <span>:</span>
            <span className="text-blue-400">~/portfolio</span>
            <span>$</span>
            <span className="text-foreground typing-effect">whoami</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-foreground mb-4">
              <span className="text-primary font-bold">Hi, I'm Victor Zion.</span>
            </p>
            <p className="text-muted-foreground">
              [+] AI Engineer <br />
              [+] Backend Developer <br />
              [+] Technical Writer <br />
              [+] Tech Career Advisor
            </p>
          </motion.div>

          <div className="flex gap-2 mb-2 text-muted-foreground">
            <span className="text-primary">victor@zhayon</span>
            <span>:</span>
            <span className="text-blue-400">~/portfolio</span>
            <span>$</span>
            <span className="text-foreground typing-effect delay-1000">cat current_status.txt</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-foreground text-lg sm:text-2xl font-bold leading-tight mb-8 min-h-[4.4em] sm:min-h-[4.4em] lg:min-h-[2.3em] relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                "{headlines[index]}"<span className="animate-pulse">_</span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="flex gap-2 text-muted-foreground"
          >
            <span className="text-primary">victor@zhayon</span>
            <span>:</span>
            <span className="text-blue-400">~/portfolio</span>
            <span>$</span>
            <span className="animate-pulse text-foreground">█</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2.5 }}
        className="mt-12"
      >
        <a
          href="/Victor_Zion_CV.pdf"
          download
          className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
        >
          <Download size={15} />
          download_resume.sh
        </a>
      </motion.div>
    </section>
  );
}
