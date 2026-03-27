import { motion } from "framer-motion";

export function HeroSection() {
  const handleScroll = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-primary text-sm mb-5">
        
        Hi, I'm Victor.
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        
        {"\n"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12">AI/ML Engineer · Backend Engineer · Technical Writer · Tech Career Advisor


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
    </section>);

}