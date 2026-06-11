import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProject = {
  title: "techDNA",
  description:
    "A career discovery web app that helps people find their natural fit in tech. Users complete a 10-question digital literacy assessment followed by a 40-question personality and aptitude quiz.",
  tech: ["HTML", "CSS", "JavaScript", "Netlify Serverless Functions", "Google Gemini 2.5 Flash", "Supabase (PostgreSQL)", "Netlify"],
  github: "https://github.com/VictorZhayon/tech_dna-pathfinder",
  live: "https://www.techdna.app",
};

const projects = [
  {
    title: "Kavanah",
    description:
      "A gospel music sight-reading learning app. Helps upcoming musicians build fluency in reading gospel notation through structured lessons and exercises.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase"],
    comingSoon: true,
  },
  {
    title: "Volta",
    description:
      "Volta is a dark-themed poetry generation web app that streams AI-written poems token-by-token with live revision, analysis, and sharing tools.",
    tech: ["FastAPI", "Python 3.12", "Vanilla JS", "Google Gemini (OpenAI-compatible API)", "Server-Sent Events", "SQLite", "slowapi", "Vercel"],
    github: "https://github.com/VictorZhayon/peom_ai_agent",
    live: "https://volta-dun.vercel.app",
  },
  {
    title: "Redocly",
    description:
      "This is the Redocly documentation site — a Mintlify-hosted developer docs page for Redoc, an open-source tool that generates clean, three-panel web documentation from OpenAPI/Swagger description files.",
    tech: ["Markdown React\n", "Mintlify", "Markdown", "JSON"],
    github: "https://github.com/VictorZhayon/migration-docs",
    live: "https://demo-3d453564.mintlify.app/",
  },
  {
    title: "Anthropic Messages API Documentation",
    description:
      "A developer documentation site covering how to integrate Claude into applications via the Anthropic Messages API, including a tutorial, API reference, and AI coding tool guides. Created during the Creators' Growth program.",
    tech: ["Mintlify", "MDX", "JSON"],
    github: "https://github.com/VictorZhayon/victor-creator-growth",
    live: "https://creatorsgrowth.mintlify.app/home",
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
              <div className="flex items-center gap-3">
                {project.comingSoon && (
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Coming Soon
                  </span>
                )}
                {!project.comingSoon && project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {!project.comingSoon && project.live && (
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
