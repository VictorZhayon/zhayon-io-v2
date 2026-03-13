import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: BookOpen, href: "https://medium.com", label: "Medium" },
];

export function FooterSection() {
  return (
    <footer className="py-12 text-center">
      {/* Mobile social links */}
      <div className="flex items-center justify-center gap-5 mb-6 lg:hidden">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 block"
      >
        <p>Designed & Built by Victor Zion</p>
        <p className="mt-1">
          Inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Brittany Chiang
          </a>
        </p>
      </a>
    </footer>
  );
}
