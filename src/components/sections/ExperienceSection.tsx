import { motion } from "framer-motion";
import { experiences } from "@/constants/data";
import { GitCommit, GitBranch } from "lucide-react";
import { ScrambleText } from "@/components/ScrambleText";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="02."
      >
        <ScrambleText text="Where I've worked" />
      </motion.h3>

      <div className="relative mt-12 max-w-3xl">
        <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border hidden sm:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const fakeHash = Math.random().toString(16).substring(2, 9);
            
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-0 sm:pl-16 group"
              >
                {/* Git Node */}
                <div className="absolute left-[11px] top-1.5 w-3 h-3 rounded-full bg-primary border-[3px] border-background shadow-[0_0_0_4px_hsl(var(--background))] hidden sm:block z-10 group-hover:scale-150 transition-transform duration-300" />
                
                {/* Git Commit Hash & Branch */}
                <div className="flex items-center gap-3 mb-2 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded">
                    <GitCommit size={14} /> {fakeHash}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={14} /> main
                  </span>
                  <span className="text-muted-foreground/60 hidden sm:inline">— {exp.period}</span>
                </div>

                {/* Commit Message (Role & Company) */}
                <h4 className="text-foreground text-xl font-medium mb-4">
                  feat: <span className="text-foreground">{exp.title}</span>{" "}
                  <span className="text-primary">@ {exp.company}</span>
                </h4>
                
                <p className="font-mono text-muted-foreground text-xs mb-6 sm:hidden">
                  {exp.period}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-muted-foreground border border-border px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0 select-none">|</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
