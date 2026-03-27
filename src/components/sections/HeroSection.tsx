import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const headlines = [
  "Engineer who writes. Writer who ships.",
  "I build systems. I document them. Both, well.",
  "I speak fluently in code and in prose.",
  "I build what works. I write what lasts.",
  "Half engineer, half writer. Fully useful.",
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-primary text-sm mb-5">
        Hi, I'm Victor.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 h-[1.3em] sm:h-[1.3em] lg:h-[1.3em] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {headlines[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12">
        AI/ML Engineer · Backend Engineer · Technical Writer · Tech Career Advisor
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}>
        <a
          href="/victor-zion-cv.pdf"
          download
          className="border border-primary text-primary px-7 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200 inline-block">
          Download My CV
        </a>
      </motion.div>
    </section>
  );
}

}