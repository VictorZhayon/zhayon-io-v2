import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { featuredProject, projects } from "@/constants/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Featured project spanning 2 columns */}
        <motion.div
          variants={cardVariants}
          onClick={() => window.open(featuredProject.live, "_blank", "noopener,noreferrer")}
          className="sm:col-span-2 bg-card rounded-lg p-6 sm:p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col cursor-pointer"
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
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-foreground hover:text-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>

        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            onClick={() => project.live && window.open(project.live, "_blank", "noopener,noreferrer")}
            className={`bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col ${project.live ? "cursor-pointer" : ""}`}
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {!project.comingSoon && project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
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
      </motion.div>
    </section>
  );
}
