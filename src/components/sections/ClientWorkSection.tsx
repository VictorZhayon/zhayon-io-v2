import { motion } from "framer-motion";
import { ExternalLink, Globe, FileJson, Terminal } from "lucide-react";
import { clients } from "@/constants/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrambleText } from "@/components/ScrambleText";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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

export function ClientWorkSection() {
  return (
    <section id="client-work" className="py-24 relative">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="04."
      >
        <ScrambleText text="Client Work" />
      </motion.h3>

      <TooltipProvider delayDuration={200}>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {clients.map((client) => (
            <Tooltip key={client.title}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  onClick={() => window.open(client.live, "_blank", "noopener,noreferrer")}
                  className="bg-card rounded-lg border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col cursor-pointer overflow-hidden group"
                >
                  {/* IDE Tab Header */}
                  <div className="bg-muted border-b border-border px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileJson size={14} className="text-purple-400" />
                      <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        {client.title.toLowerCase().replace(/\s+/g, '_')}.json
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={client.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full font-mono text-sm">
                    <div className="text-muted-foreground mb-4 flex items-center gap-2 text-xs">
                      <Terminal size={14} className="text-primary"/> <span className="text-primary">curl</span> {client.live.replace('https://', '')}
                    </div>

                    <div className="mb-4">
                      <span className="text-primary">"client"</span>: <span className="text-foreground">"{client.title}"</span>,
                    </div>
                    
                    <div className="mb-auto pb-4 text-muted-foreground">
                      <span className="text-primary">"description"</span>: <span className="text-foreground leading-relaxed">"{client.description}"</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                      <span className="text-primary">"status"</span>: <span className="text-green-400">"deployed"</span>
                    </div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={16} className="w-[360px] h-[225px] p-0 overflow-hidden rounded-xl border-border bg-card shadow-2xl hidden sm:block">
                <PreviewContent liveUrl={client.live} icon={Globe} />
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </TooltipProvider>
    </section>
  );
}
