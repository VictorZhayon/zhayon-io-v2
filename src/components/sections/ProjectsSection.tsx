import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProject = {
  title: "IntelliSearch AI",
  description:
    "A semantic search engine powered by vector embeddings and LLMs. Users can query a knowledge base in natural language and receive contextually accurate results with source attribution.",
  tech: ["Python", "FastAPI", "LangChain", "Pinecone", "React"],
  github: "https://github.com",
  live: "https://example.com",
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
    title: "FinTrack API",
    description:
      "RESTful API for personal finance tracking with automated categorization of transactions using a fine-tuned classification model.",
    tech: ["FastAPI", "PostgreSQL", "scikit-learn"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CareerMap",
    description:
      "An interactive roadmap generator for aspiring software engineers. Users select a career path and get a personalized learning plan.",
    tech: ["TypeScript", "React", "Claude API"],
    github: "https://github.com",
    live: "https://example.com",
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

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-16"
      >
        <p className="font-mono text-primary text-xs mb-2">Featured Project</p>
        <div className="bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-primary/30 transition-colors duration-200">
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
          <div className="flex gap-4">
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
