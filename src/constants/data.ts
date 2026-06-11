export const headlines = [
  "Engineer who writes. Writer who ships.",
  "I speak fluently in code and in prose.",
  "I build what works. I write what lasts.",
  "Half engineer, half writer. Fully useful.",
];

export const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Client Work", href: "#client-work", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

export const socialLinks = [
  { href: "https://www.github.com/VictorZhayon", label: "GitHub" },
  { href: "https://www.linkedin.com/in/victor-zion-1b85a440a", label: "LinkedIn" },
  { href: "https://www.x.com/zhayon_io", label: "X" },
  { href: "https://medium.com/@victorzion1", label: "Medium" },
];

export const technologies = [
  "Python",
  "JavaScript",
  "Markdown/Markdown React",
  "Mintlify",
  "FastAPI/Flask",
  "Node.js",
  "TypeScript",
  "MongoDB",
];

export const experiences = [
  {
    company: "GemNexus",
    title: "Chief Technology Officer",
    period: "Dec 2025 — Present",
    tech: ["Python", "JavaScript", "AWS", "PostgreSQL"],
    bullets: [
      "Technology Strategy & Vision — Defining and driving the technical direction of GemNexus, including decisions around the tools, platforms, and infrastructure that power your training programs and digital products.",
      "Product Development & Oversight — Leading the build and iteration of tech products, ensuring they align with GemNexus's mission. This includes overseeing development cycles, quality, and the roadmap for tools used in training and career advisory.",
      "Tech Team Leadership & Capacity Building — Managing and mentoring the technical team, and since GemNexus is a digital literacy organization, also modeling and championing a culture of continuous learning and skills development — both internally and for the learners you serve.",
    ],
  },
  {
    company: "Hackmamba",
    title: "Documentation Engineer",
    period: "Oct 2025 — Present",
    tech: ["Mintlify", "Markdown", "SEO", "Git"],
    bullets: [
      "Migrated existing documentation sites (nTop, CoinBase, FrankieOne, etc.) to Mintlify, improving content discoverability and user engagement.",
      "Collaborate with other documentation migration teammates to translate complex features into clear, actionable documentation.",
      "Contributed to a 40% increase in organic traffic through SEO-optimized technical content.",
    ],
  },
  {
    company: "Elora",
    title: "AI Engineer/ Technical Researcher",
    period: "Aug 2025 — Present",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
    bullets: [
      "Wrote extensive and elaborate documentations to describe workflow and system.",
      "Led research in the application of AI in Healthcare, particularly skincare.",
      "Collaborated with cross-functional teams to integrate AI solutions into product offerings, resulting in a 25% improvement in user engagement.",
    ],
  },
  {
    company: "Demz Aminytics",
    title: "LLM Engineer",
    period: "Jan 2025 — Apr 2025",
    tech: ["OpenAI", "Python", "AWS", "Whisper"],
    bullets: [
      "Built and deployed an AI-powered Markdown documentation generator using OpenAI's o3-mini, resulting in a 50% reduction in documentation time for internal projects.",
      "Developed an AI-powered Screen Recorder that automatically generates video summaries, action points, and highlights, using faster-whisper and OpenAI's o3-mini, improving team productivity by 30%.",
      "Collaborated with the backend team to deploy AI solutions on AWS, ensuring scalability and reliability of the applications.",
    ],
  },
  {
    company: "Wedigraf Technologies",
    title: "Flutter Developer - Intern",
    period: "Jan 2023 — Jun 2023",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    bullets: [
      "Co-led a team of 5 in developing a cross-platform mobile application using Flutter",
      "Learnt Flutter and Dart from scratch, and successfully implemented key features such as user authentication, real-time chat, and push notifications.",
      "Implemented a responsive UI that adapts to various screen sizes, resulting in a 20% increase in user engagement.",
    ],
  },
];

export const featuredProject = {
  title: "techDNA",
  description:
    "A career discovery web app that helps people find their natural fit in tech. Users complete a 10-question digital literacy assessment followed by a 40-question personality and aptitude quiz.",
  tech: ["HTML", "CSS", "JavaScript", "Netlify Serverless Functions", "Google Gemini 2.5 Flash", "Supabase (PostgreSQL)", "Netlify"],
  github: "https://github.com/VictorZhayon/tech_dna-pathfinder",
  live: "https://www.techdna.app",
};

export const projects = [
  {
    title: "Kavanah",
    description:
      "A gospel music sight-reading learning app. Helps upcoming musicians build fluency in reading gospel notation through structured lessons and exercises.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase"],
    comingSoon: true,
  },
  {
    title: "Volta",
    description:
      "Volta is a dark-themed poetry generation web app that streams AI-written poems token-by-token with live revision, analysis, and sharing tools.",
    tech: ["FastAPI", "Python 3.12", "Vanilla JS", "Google Gemini (OpenAI-compatible API)", "Server-Sent Events", "SQLite", "slowapi", "Vercel"],
    github: "https://github.com/VictorZhayon/peom_ai_agent",
    live: "https://volta-dun.vercel.app",
  },
  {
    title: "Redocly",
    description:
      "This is the Redocly documentation site — a Mintlify-hosted developer docs page for Redoc, an open-source tool that generates clean, three-panel web documentation from OpenAPI/Swagger description files.",
    tech: ["Markdown React", "Mintlify", "Markdown", "JSON"],
    github: "https://github.com/VictorZhayon/migration-docs",
    live: "https://demo-3d453564.mintlify.app/",
  },
  {
    title: "Anthropic Messages API Documentation",
    description:
      "A developer documentation site covering how to integrate Claude into applications via the Anthropic Messages API, including a tutorial, API reference, and AI coding tool guides. Created during the Creators' Growth program.",
    tech: ["Mintlify", "MDX", "JSON"],
    github: "https://github.com/VictorZhayon/victor-creator-growth",
    live: "https://creatorsgrowth.mintlify.app/home",
  },
  {
    title: "Sage",
    description:
      "Sage AI Assistant is a mystical document question-answering app powered by Gemini AI. Present your manuscripts (PDF, TXT, DOCX) and seek wisdom from their pages! Built to better understand how RAG systems work.",
    tech: ["Python", "Streamlit", "Google Gemini API", "FAISS"],
    github: "https://github.com/VictorZhayon/Sage",
    live: "https://sage-ai-docs.streamlit.app/",
  },
  {
    title: "LifeLens",
    description:
      "A PWA that helps you conduct structured life reviews across 9 areas with AI-powered insights, trend charts, and email reminders — backed by Firebase for persistent storage. Built by Victor for Victor.",
    tech: ["React (Vite)", "Tailwind CSS", "Firebase Firestore", "Google Gemini API"],
    github: "https://github.com/VictorZhayon/life_lens",
  },
];

export const clients = [
  {
    title: "Laptop Doctor",
    description:
      "Business site for a full-service laptop shop — covering sales, expert repairs, genuine accessories, professional software installation, and premium laptop skins.",
    live: "https://laptopdoctor.netlify.app/",
  },
  {
    title: "EsterOfWeb3",
    description: "Personal portfolio website for EsterOfWeb3, a Web3 professional.",
    live: "https://esterofweb3.netlify.app/",
  },
  {
    title: "Praise Oton",
    description: "Personal portfolio website for Praise Oton, a Data Engineer.",
    live: "https://victorzhayon.github.io/praise-oton/",
  },
];

export const stats = [
  { value: 7, suffix: "+", label: "Years in Tech" },
  { value: 4, suffix: "+", label: "Years Professional" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies Used" },
];
