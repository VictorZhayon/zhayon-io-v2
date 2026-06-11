import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/data";

export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

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
        Where I've worked
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-0"
      >
        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Companies"
          className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b sm:border-b-0 sm:border-l border-border min-w-[140px]"
        >
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 text-xs font-mono text-left whitespace-nowrap transition-all duration-200 border-b-2 sm:border-b-0 sm:border-l-2 -ml-px ${
                active === i
                  ? "text-primary border-primary bg-muted/50"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <div role="tabpanel" className="sm:pl-8 pt-4 sm:pt-0 min-h-[280px]">
          <h4 className="text-foreground text-lg font-medium">
            {current.title}{" "}
            <span className="text-primary">@ {current.company}</span>
          </h4>
          <p className="font-mono text-muted-foreground text-xs mt-1 mb-6">
            {current.period}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {current.tech.map((t) => (
              <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {current.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
