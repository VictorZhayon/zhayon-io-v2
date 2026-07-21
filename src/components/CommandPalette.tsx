import * as React from "react"
import { Command } from "cmdk"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun, User, Briefcase, Code, Mail, Layout, Folder } from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
      <div 
        className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="w-full h-full flex flex-col">
          <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
            <span className="text-primary font-mono mr-2">{'>'}</span>
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="flex-1 h-12 bg-transparent text-foreground placeholder:text-muted-foreground outline-none border-none font-mono text-sm"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-mono text-muted-foreground px-2 py-1 mb-2">
              <Command.Item 
                onSelect={() => runCommand(() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <User size={16} /> <span>cd ~/about</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Briefcase size={16} /> <span>cd ~/experience</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Code size={16} /> <span>cd ~/projects</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => document.querySelector("#client-work")?.scrollIntoView({ behavior: "smooth" }))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Folder size={16} /> <span>cd ~/clients</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Theme" className="text-xs font-mono text-muted-foreground px-2 py-1 mb-2">
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("light"))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Sun size={16} /> <span>theme set light</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("dark"))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Moon size={16} /> <span>theme set dark</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => setTheme("system"))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Monitor size={16} /> <span>theme set system</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Actions" className="text-xs font-mono text-muted-foreground px-2 py-1">
              <Command.Item 
                onSelect={() => runCommand(() => window.open('/Victor_Zion_CV.pdf', '_blank'))}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Layout size={16} /> <span>download --resume</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => window.location.href = 'mailto:victorzion1@gmail.com')}
                className="flex items-center gap-2 px-2 py-2.5 rounded-md cursor-pointer text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Mail size={16} /> <span>mail --send victorzion1@gmail.com</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
