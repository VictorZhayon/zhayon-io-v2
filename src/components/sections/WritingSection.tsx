import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Building a Semantic Search Engine with LangChain and Pinecone",
    excerpt: "A step-by-step guide to creating a production-ready semantic search system using vector embeddings and retrieval-augmented generation.",
    publication: "Hackmamba",
    date: "Nov 2024",
    link: "https://hackmamba.io",
  },
  {
    title: "Designing Scalable REST APIs with FastAPI",
    excerpt: "Best practices for structuring, documenting, and deploying high-performance Python APIs that scale with your user base.",
    publication: "Medium",
    date: "Sep 2024",
    link: "https://medium.com",
  },
  {
    title: "A Practical Introduction to Fine-Tuning LLMs",
    excerpt: "How to fine-tune open-source language models for domain-specific tasks using Hugging Face and LoRA adapters.",
    publication: "Hackmamba",
    date: "Jul 2024",
    link: "https://hackmamba.io",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="04."
      >
        Writing
      </motion.h3>

      <div className="space-y-1">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="group block p-5 rounded-lg hover:bg-card transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-primary">{article.publication}</span>
                  <span className="text-muted-foreground text-xs">·</span>
                  <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h4 className="text-foreground font-medium group-hover:text-primary transition-colors duration-200 mb-1">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  {article.excerpt}
                </p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors duration-200" size={18} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
