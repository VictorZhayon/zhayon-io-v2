import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 text-center max-w-xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-primary text-sm mb-4">04. What's Next?


      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-foreground text-4xl font-bold mb-5">
        
        Let's Connect
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-muted-foreground text-sm leading-relaxed mb-10">
        
        I'm always open to new opportunities, collaborations, or just a good conversation about AI,
        backend systems, or navigating a tech career. Whether you have a question or just want to
        say hi, my inbox is open.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}>
        
        <a
          href="mailto:victorzion1@gmail.com"
          className="inline-block border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors duration-200">
          
          Say Hello
        </a>
      </motion.div>
    </section>);

}