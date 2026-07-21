import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Globe, FileCode, Terminal } from "lucide-react";
import { featuredProject, projects } from "@/constants/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrambleText } from "@/components/ScrambleText";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const PreviewContent = ({ liveUrl, icon: Icon }: { liveUrl?: string; icon: React.ElementType }) => {
  if (liveUrl) {
    return (
      <iframe
        src={liveUrl}
        className="w-[400%] h-[400%] scale-[0.25] origin-top-left border-0 bg-background pointer-events-none"
        tabIndex={-1}
        aria-hidden="true"
      />
    );
  }
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-background">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1">404</h3>
      <p className="text-xs text-muted-foreground font-mono">
        // Deployment not found
      </p>
    </div>
  );
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
        <ScrambleText text="Some Things I've Built" />
      </motion.h3>

      <TooltipProvider delayDuration={200}>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Featured project spanning 2 columns */}
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                variants={cardVariants}
                onClick={() => window.open(featuredProject.live, "_blank", "noopener,noreferrer")}
                className="sm:col-span-2 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col cursor-pointer overflow-hidden group"
              >
                {/* IDE Tab Header */}
                <div className="bg-muted border-b border-border px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode size={14} className="text-primary" />
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      {featuredProject.title.toLowerCase().replace(/\s+/g, '_')}.ts
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col h-full">
                  <p className="font-mono text-primary text-xs mb-4 flex items-center gap-2">
                    <Terminal size={14}/> ./run_featured_project.sh
                  </p>
                  <h4 className="text-foreground text-xl font-semibold mb-3">
                    {featuredProject.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl font-mono">
                    <span className="text-primary">{"/*"}</span> {featuredProject.description} <span className="text-primary">{"*/"}</span>
                  </p>
                  
                  <div className="mt-auto">
                    <div className="font-mono text-xs text-muted-foreground mb-2">dependencies: {"{"}</div>
                    <div className="flex flex-wrap gap-2 pl-4 mb-2">
                      {featuredProject.tech.map((t) => (
                        <span key={t} className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                          "{t}"
                        </span>
                      ))}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">{"}"}</div>
                  </div>
                </div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={16} className="w-[360px] h-[225px] p-0 overflow-hidden rounded-xl border-border bg-card shadow-2xl hidden sm:block">
              <PreviewContent liveUrl={featuredProject.live} icon={Folder} />
            </TooltipContent>
          </Tooltip>

          {projects.map((project) => (
            <Tooltip key={project.title}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  onClick={() => project.live && window.open(project.live, "_blank", "noopener,noreferrer")}
                  className={`bg-card rounded-lg border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col overflow-hidden group ${project.live ? "cursor-pointer" : ""}`}
                >
                  {/* IDE Tab Header */}
                  <div className="bg-muted border-b border-border px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCode size={14} className="text-muted-foreground" />
                      <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        {project.title.toLowerCase().replace(/\s+/g, '_')}.ts
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.comingSoon && (
                        <span className="font-mono text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                          WIP
                        </span>
                      )}
                      {!project.comingSoon && project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                          <Github size={14} />
                        </a>
                      )}
                      {!project.comingSoon && project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <h4 className="text-foreground font-semibold mb-3 hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-auto pb-6 font-mono">
                      <span className="opacity-50">{"// "}</span>{project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto border-t border-border/50 pt-4">
                      {project.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                          <span className="text-primary">▹</span>{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={16} className="w-[360px] h-[225px] p-0 overflow-hidden rounded-xl border-border bg-card shadow-2xl hidden sm:block">
                <PreviewContent liveUrl={project.live} icon={Folder} />
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </TooltipProvider>
    </section>
  );
}

