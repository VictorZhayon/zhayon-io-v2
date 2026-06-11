import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { clients } from "@/constants/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ClientWorkSection() {
  return (
    <section id="client-work" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="04."
      >
        Client Work
      </motion.h3>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.title}
            variants={cardVariants}
            onClick={() => window.open(client.live, "_blank", "noopener,noreferrer")}
            className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6">
              <Globe className="text-primary" size={36} strokeWidth={1} />
              <a
                href={client.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <h4 className="text-foreground font-semibold mb-2 hover:text-primary transition-colors">
              {client.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-auto">
              {client.description}
            </p>
            <p className="font-mono text-xs text-primary mt-4">Client Project</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
