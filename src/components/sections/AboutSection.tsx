import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="section-heading"
        data-num="01."
      >
        About Me
      </motion.h3>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground space-y-4 text-sm leading-relaxed"
        >
          <p>
            Hello! I'm Victor, a software engineer and technical writer based in Nigeria. I
            enjoy building things that live on the internet — from intelligent backend systems to
            well-crafted technical articles that make complex ideas accessible.
          </p>
          <p>
            My journey into tech started with a curiosity about how machines learn and make decisions.
            That curiosity led me down the path of AI/ML engineering, where I've had the privilege of
            working on recommendation systems, natural language processing pipelines, retrieval augmented generation systems,
            and API architectures that serve thousands of users.
          </p>
          <p>
            Today, I split my time between writing production code, publishing technical content for
            developer communities, and mentoring early-career techies through the often-confusing
            landscape of tech careers.
          </p>
          <p className="text-muted-foreground">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-xs">
            {["Python", "JavaScript", "Markdown/Markdown React", "Mintlify", "FastAPI", "Flask", "Node.js", "TypeScript", "PostgreSQL", "LangChain", "MongoDB"].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-primary">▹</span> {tech}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative group mx-auto md:mx-0"
        >
          <div className="relative w-60 h-60 xl:w-72 xl:h-72">
            <div className="absolute inset-0 rounded border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200 z-0" />
            <div className="relative z-10 rounded overflow-hidden">
              <img
                src={profileImg}
                alt="Victor Zion"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-200 rounded" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
