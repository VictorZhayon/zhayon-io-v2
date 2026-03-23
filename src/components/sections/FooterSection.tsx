import { Github, BookOpen } from "lucide-react";

const XTwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://www.github.com/VictorZhayon", label: "GitHub" },
  { icon: XTwitterIcon, href: "https://www.x.com/zhayon_io", label: "X" },
  { icon: BookOpen, href: "https://medium.com/@victorzion1", label: "Medium" },
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
        href="https://github.com/VictorZhayon"
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
