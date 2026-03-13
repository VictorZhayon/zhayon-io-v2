import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Tech is Not for Everybody",
    excerpt: "... and that's perfectly fine.",
    link: "https://medium.com/@victorzion1/tech-is-not-for-everybody-349a05f675a9",
  },
  {
    title: "The Technical Writing Side Quest That Changed My Career",
    excerpt: "Why every developer should consider writing as a career accelerator, not just a hobby.",
    link: "#",
  },
  {
    title: "What I Wish I Knew Before My First Backend Role",
    excerpt: "Practical advice on system design interviews, on-the-job learning, and surviving your first production outage.",
    link: "#",
  },
];

export function CareerNotesSection() {
  return (
    <section className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="05."
      >
        Career Notes
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="group block bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-200"
          >
            <h4 className="text-foreground font-medium mb-2 group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-primary">
              Read more <ArrowUpRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
