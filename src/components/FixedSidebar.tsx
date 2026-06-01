import { BookOpen, Menu, X as XIcon } from "lucide-react";
import { useState, useEffect } from "react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.957.005 1.983.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const XTwitterIcon = ({ size = 20 }: {size?: number;}) =>
<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;


const navLinks = [
{ label: "About", href: "#about", num: "01" },
{ label: "Experience", href: "#experience", num: "02" },
{ label: "Projects", href: "#projects", num: "03" },
{ label: "Client Work", href: "#client-work", num: "04" },
{ label: "Contact", href: "#contact", num: "05" }];


const socialLinks = [
{ icon: GithubIcon, href: "https://www.github.com/VictorZhayon", label: "GitHub" },
{ icon: XTwitterIcon, href: "https://www.x.com/zhayon_io", label: "X" },
{ icon: BookOpen, href: "https://medium.com/@victorzion1", label: "Medium" }];


export function FixedSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.3;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-foreground font-bold text-lg">
          V<span className="text-primary">Z</span>
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu">
          
          {mobileOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen &&
      <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6">
          {navLinks.map((link) =>
        <button
          key={link.href}
          onClick={() => handleNavClick(link.href)}
          className="text-foreground hover:text-primary transition-colors text-lg">
          
              <span className="font-mono text-primary text-sm mr-2">{link.num}.</span>
              {link.label}
            </button>
        )}
          <a
          href="/Victor-Zion-CV-updated.pdf"
          className="mt-4 border border-primary text-primary px-6 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors">
          
            Resume
          </a>
        </div>
      }

      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[35%] max-w-[480px] flex-col justify-between p-12 xl:p-16 z-30">
        <div>
          <a href="#" className="block mb-2">
            <h1 className="text-foreground text-4xl font-bold tracking-tight xl:text-6xl">
              Victor Zion
            </h1>
          </a>
          <p className="text-foreground text-lg font-medium mt-2">
            Software Engineer | Technical Writer
          </p>
          <p className="text-muted-foreground text-sm mt-1 max-w-[280px]">
            I build intelligent systems and write about technology with clarity and intent.
          </p>

          <nav className="mt-12 flex flex-col gap-3">
            {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`group flex items-center gap-3 transition-all duration-200 text-sm ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              
                <span className={`h-px transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "w-12 bg-primary"
                    : "w-6 bg-muted-foreground group-hover:w-12 group-hover:bg-foreground"
                }`} />
                <span className="uppercase tracking-widest text-xs font-medium">
                  {link.label}
                </span>
              </button>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          {socialLinks.map((social) =>
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:-translate-y-0.5"
            aria-label={social.label}>
            
              <social.icon size={20} />
            </a>
          )}
        </div>
      </aside>
    </>);

}