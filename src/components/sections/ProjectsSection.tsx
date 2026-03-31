import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProject = {
  title: "techDNA",
  description:
    "An AI-powered career discovery quiz that reveals where you naturally belong in tech — no experience needed. A follow-up consultation is given by the Tech Shepra - Victor Zion.",
  tech: ["HTML", "CSS", "Vanilla JS", "Email JS", "Google Gemini"],
  github: "https://github.com/VictorZhayon/tech_dna",
  live: "https://tech-dna.netlify.app/",
};

const projects = [
  {
    title: "PristineQuill",
    description:
      "PristineQuill is an AI-powered poetry generation app created and designed to craft beautiful poems one stanza at a time.",
    tech: ["Python", "Streamlit", "openai-sdk", "OpenRouter"],
    github: "https://github.com/VictorZhayon/peom_ai_agent",
    live: "https://poem-ai-agent.streamlit.app/",
  },
  {
    title: "Redocly",
    description:
      "This is the Redocly documentation site — a Mintlify-hosted developer docs page for Redoc, an open-source tool that generates clean, three-panel web documentation from OpenAPI/Swagger description files.",
    tech: ["React", "Mintlify", "Markdown", "JSON"],
    github: "https://github.com/VictorZhayon/migration-docs",
    live: "https://demo-3d453564.mintlify.app/",
  },
  {
    title: "Sage",
    description:
      "Sage AI Assistant is a mystical document question-answering app powered by Gemini AI. Present your manuscripts (PDF, TXT, DOCX) and seek wisdom from their pages! Built to better understand how RAG systems work.",
    tech: ["Python", "Streamlit", "Google Gemini API", "FAISS"],
    github: "https://github.com/VictorZhayon/Sage",
    live: "https://sage-ai-docs.streamlit.app/",
  },
  {
    title: "LifeLens",
    description:
      "A PWA that helps you conduct structured life reviews across 9 areas with AI-powered insights, trend charts, and email reminders — backed by Firebase for persistent storage. Built by Victor for Victor.",
    tech: ["React (Vite)", "Tailwind CSS", "Firebase Firestore", "Google Gemini API"],
    github: "https://github.com/VictorZhayon/life_lens",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="03."
      >
        Projects
      </motion.h3>



      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured project taking 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="sm:col-span-2 bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-primary/30 transition-colors duration-200 flex flex-col"
        >
          <p className="font-mono text-primary text-xs mb-2">Featured Project</p>
          <h4 className="text-foreground text-xl font-semibold mb-3">
            {featuredProject.title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
            {featuredProject.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {featuredProject.tech.map((t) => (
              <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-auto">
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <Folder className="text-primary" size={36} strokeWidth={1} />
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <h4 className="text-foreground font-semibold mb-2 hover:text-primary transition-colors">
              {project.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-auto pb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
