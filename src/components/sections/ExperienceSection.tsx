import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Hackmamba",
    title: "Technical Writer",
    period: "Jan 2023 — Present",
    bullets: [
      "Author in-depth technical articles on AI/ML, backend engineering, and developer tools for a global developer audience.",
      "Collaborate with engineering teams to translate complex product features into clear, actionable documentation.",
      "Contributed to a 40% increase in organic traffic through SEO-optimized technical content.",
    ],
  },
  {
    company: "Company B",
    title: "Backend Engineer",
    period: "Jun 2021 — Dec 2022",
    bullets: [
      "Designed and maintained RESTful APIs serving 50,000+ daily active users using FastAPI and PostgreSQL.",
      "Implemented CI/CD pipelines and containerized services with Docker, reducing deployment times by 60%.",
      "Led database schema migrations and query optimization efforts, improving average response times by 35%.",
    ],
  },
  {
    company: "Company A",
    title: "AI/ML Engineer",
    period: "Mar 2020 — May 2021",
    bullets: [
      "Built and deployed NLP models for sentiment analysis and text classification using PyTorch and Hugging Face Transformers.",
      "Developed data pipelines for ingesting and preprocessing large-scale datasets with Apache Airflow.",
      "Collaborated with product teams to integrate ML-powered recommendations into the core platform.",
    ],
  },
];

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
        Experience
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-0"
      >
        {/* Tab list */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b sm:border-b-0 sm:border-l border-border min-w-[140px]">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
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
        <div className="sm:pl-8 pt-4 sm:pt-0 min-h-[280px]">
          <h4 className="text-foreground text-lg font-medium">
            {current.title}{" "}
            <span className="text-primary">@ {current.company}</span>
          </h4>
          <p className="font-mono text-muted-foreground text-xs mt-1 mb-6">
            {current.period}
          </p>
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
