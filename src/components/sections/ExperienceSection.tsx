import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "GemNexus",
    title: "Chief Technology Officer",
    period: "Dec 2025 — Present",
    tech: ["Python", "React", "AWS", "PostgreSQL"],
    bullets: [
      "Technology Strategy & Vision — Defining and driving the technical direction of GemNexus, including decisions around the tools, platforms, and infrastructure that power your training programs and digital products.",
      "Product Development & Oversight — Leading the build and iteration of tech products, ensuring they align with GemNexus's mission. This includes overseeing development cycles, quality, and the roadmap for tools used in training and career advisory.",
      "Tech Team Leadership & Capacity Building — Managing and mentoring the technical team, and since GemNexus is a digital literacy organization, also modeling and championing a culture of continuous learning and skills development — both internally and for the learners you serve.",
    ],
  },
  {
    company: "Hackmamba",
    title: "Documentation Engineer",
    period: "Oct 2025 — Present",
    tech: ["Mintlify", "Markdown", "SEO", "Git"],
    bullets: [
      "Migrated existing documenation sites (nTop, CoinBase, FrankieOne, etc.) to Mintlify, improving content discoverability and user engagement.",
      "Collaborate with other documentation migration teammates to translate complex features into clear, actionable documentation.",
      "Contributed to a 40% increase in organic traffic through SEO-optimized technical content.",
    ],
  },
  {
    company: "Elora",
    title: "AI Engineer/ Technical Researcher",
    period: "Aug 2025 — Present",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    bullets: [
      "Wrote extensive and elaborate documentations to describe workflow and system.",
      "Led research in the application of AI in Healthcare, particularly skincare.",
      "Collaborated with cross-functional teams to integrate AI solutions into product offerings, resulting in a 25% improvement in user engagement.",
    ],
  },
  {
    company: "Morlabs Protocol",
    title: "LLM Engineer/Lead Technical Researcher",
    period: "Mar 2025 — Present",
    tech: ["LangChain", "Python", "FastAPI", "Solana"],
    bullets: [
      "Led the research of useful and relevant APIs/SDKs in the Solana ecosystem, and implemented them in the development of a Solana-based LLM-powered chatbot.",
      "Collaborated with the Backend and DevOps teams to design and implement scalable backend services using Python and FastAPI, resulting in a 30% reduction in latency.",
      "Built and deployed LLM-based solutions for various use cases, including documentation guide and code generation, using LangChain.",
    ],
  },
  {
    company: "Demz Aminytics",
    title: "LLM Engineer",
    period: "Jan 2025 — Apr 2025",
    tech: ["OpenAI", "Python", "AWS", "Whisper"],
    bullets: [
      "Built and deployed an AI-powered Markdown documentation generator using OpenAI's o3-mini, resulting in a 50% reduction in documentation time for internal projects.",
      "Developed an AI-powered Screen Recorder that automatically generates video summaries, action points, and highlights, using faster-whisper and OpenAI's o3-mini, improving team productivity by 30%.",
      "Collaborated with the backend team to deploy AI solutions on AWS, ensuring scalability and reliability of the applications.",
    ],
  },
  {
    company: "Wedigraf Technologies",
    title: "Flutter Developer - Intern",
    period: "Jan 2023 — Jun 2023",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    bullets: [
      "Co-led a team of 5 in developing a cross-platform mobile application using Flutter",
      "Learnt Flutter and Dart from scratch, and successfully implemented key features such as user authentication, real-time chat, and push notifications.",
      "Implemented a responsive UI that adapts to various screen sizes, resulting in a 20% increase in user engagement.",
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
