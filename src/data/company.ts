import { IndustryItem, ProcessStep, TechCategory } from "@/types";

export const COMPANY_INFO = {
  name: "TecAura",
  legalName: "TecAura Software & Digital Technology",
  tagline: "INNOVATING TODAY. ENGINEERING TOMORROW.",
  altStatement: "BUILDING WHAT'S NEXT.",
  positioning:
    "A modern technology company that transforms business ideas into innovative digital products, intelligent software and scalable technology solutions.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "tecauratechnology@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 9605186843",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919605186843",
  markets: "India & International Markets",
  socials: {
    linkedin: "https://www.linkedin.com/in/tecaura-it-technology-8a710b449",
    instagram:
      "https://www.instagram.com/tecaura_technology?dlrf=bmY3YjkzaTE5Y3M2",
    facebook: "https://www.facebook.com/share/19Y929PFcg/",
    x: "https://x.com/TecAuraITComp",
  },
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    category: "FRONTEND ENGINEERING",
    subtitle: "Interactive, accessible, and high-velocity user interfaces",
    description:
      "We build responsive, component-driven web interfaces with strict type safety, clean semantic markup, and fluid motion choreography.",
    items: [
      {
        name: "React",
        role: "Component UI Architecture & State Management",
        level: "Core Stack",
        codeSymbol: "<React />",
      },
      {
        name: "Next.js",
        role: "App Router, SSR, Static Generation & Edge Routing",
        level: "Core Stack",
        codeSymbol: "Next.js",
      },
      {
        name: "TypeScript",
        role: "Static Type Systems & End-to-End Contract Safety",
        level: "Core Stack",
        codeSymbol: "TS : Type",
      },
      {
        name: "JavaScript",
        role: "ES2024+ Runtime, DOM APIs & Asynchronous Logic",
        level: "Core Stack",
        codeSymbol: "JS (ES6+)",
      },
      {
        name: "Tailwind CSS",
        role: "Design-Token Utility Styling & Responsive Systems",
        level: "Core Stack",
        codeSymbol: "tw-css",
      },
      {
        name: "HTML5",
        role: "Semantic Document Structure & WCAG Landmarks",
        level: "Foundation",
        codeSymbol: "<html5>",
      },
      {
        name: "CSS3",
        role: "Modern Grid, Flexbox, Custom Properties & Keyframes",
        level: "Foundation",
        codeSymbol: "@css3",
      },
    ],
  },
  {
    id: "backend",
    category: "BACKEND & SYSTEMS",
    subtitle: "Resilient APIs, business logic, and service orchestration",
    description:
      "Our server-side engineering focuses on clean domain boundaries, secure authentication, high concurrency, and maintainable service layers.",
    items: [
      {
        name: "Python",
        role: "Backend APIs, AI/ML Pipelines & Automation Scripts",
        level: "Core Stack",
        codeSymbol: "py :: def",
      },
      {
        name: "Node.js",
        role: "Event-Driven Microservices, Webhooks & REST APIs",
        level: "Core Stack",
        codeSymbol: "node.js",
      },
      {
        name: "Java",
        role: "Object-Oriented Enterprise Systems & Relational Applications",
        level: "Core Stack",
        codeSymbol: "Java VM",
      },
    ],
  },
  {
    id: "database",
    category: "DATABASE ARCHITECTURE",
    subtitle: "Transactional integrity and scalable data persistence",
    description:
      "We select and model relational and document databases based on your application's query patterns, consistency requirements, and scale.",
    items: [
      {
        name: "PostgreSQL",
        role: "Advanced Relational SQL, JSONB & ACID Transactions",
        level: "Core Data",
        codeSymbol: "PG :: SQL",
      },
      {
        name: "MySQL",
        role: "Normalized Relational Schemas & Enterprise Storage",
        level: "Core Data",
        codeSymbol: "MySQL",
      },
      {
        name: "MongoDB",
        role: "Flexible Document Schemas & High-Ingestion Collections",
        level: "Document DB",
        codeSymbol: "{ BSON }",
      },
    ],
  },
  {
    id: "ai-ml",
    category: "AI & MACHINE LEARNING",
    subtitle: "Applied intelligence embedded into practical products",
    description:
      "We design and integrate machine learning classifiers, natural language pipelines, computer vision workflows, and LLM orchestration.",
    items: [
      {
        name: "Machine Learning",
        role: "Supervised Classification, Regression & Predictive Modeling",
        level: "Applied AI",
        codeSymbol: "f(x) -> y",
      },
      {
        name: "Deep Learning",
        role: "Multi-Layer Neural Architectures & Sequence Models",
        level: "Applied AI",
        codeSymbol: "NN [Layers]",
      },
      {
        name: "NLP",
        role: "Text Classification, Sentiment & Cyberbullying Detection",
        level: "Applied AI",
        codeSymbol: "NLP :: Token",
      },
      {
        name: "Computer Vision",
        role: "Visual Inspection, Object Detection & Image Processing",
        level: "Applied AI",
        codeSymbol: "CV [Matrix]",
      },
      {
        name: "Large Language Models",
        role: "Prompt Engineering, RAG Pipelines & Intelligent Assistants",
        level: "Applied AI",
        codeSymbol: "LLM / RAG",
      },
    ],
  },
  {
    id: "cloud",
    category: "CLOUD & INFRASTRUCTURE",
    subtitle: "Containerized environments and global edge deployment",
    description:
      "We deploy applications onto modern cloud platforms with Docker containerization, environment isolation, and automated delivery pipelines.",
    items: [
      {
        name: "AWS",
        role: "Cloud Compute, Storage & Scalable Managed Services",
        level: "Cloud",
        codeSymbol: "AWS Cloud",
      },
      {
        name: "Google Cloud",
        role: "Cloud Run, AI Services & Global Infrastructure",
        level: "Cloud",
        codeSymbol: "GCP",
      },
      {
        name: "Microsoft Azure",
        role: "Enterprise Cloud Hosting & Identity Integration",
        level: "Cloud",
        codeSymbol: "Azure",
      },
      {
        name: "Docker",
        role: "Containerization & Reproducible Runtime Environments",
        level: "DevOps",
        codeSymbol: "Dockerfile",
      },
      {
        name: "Deployment Technologies",
        role: "Vercel Edge Network, CI/CD Pipelines & SSL Provisioning",
        level: "DevOps",
        codeSymbol: "CI / CD",
      },
    ],
  },
  {
    id: "tools",
    category: "ENGINEERING TOOLS & WORKFLOW",
    subtitle: "Disciplined version control, code quality, and collaboration",
    description:
      "Every project is managed with structured Git workflows, peer-reviewed commits, static analysis, and automated build verification.",
    items: [
      {
        name: "Git",
        role: "Distributed Version Control & Branching Strategy",
        level: "Standard",
        codeSymbol: "git commit",
      },
      {
        name: "GitHub",
        role: "Repository Hosting, Pull Requests & GitHub Actions CI",
        level: "Standard",
        codeSymbol: "GH Actions",
      },
      {
        name: "VS Code",
        role: "Type-Checked Development Environment & Debugging Suite",
        level: "Standard",
        codeSymbol: "IDE :: LSP",
      },
      {
        name: "Development Tools",
        role: "ESLint, Postman/REST Testing, Zod Validation & DevTools",
        level: "Standard",
        codeSymbol: "QA / Lint",
      },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision & Business Context",
    description:
      "We begin by listening closely to your core objectives, target users, operational challenges, and commercial goals. We clarify what problem the software must solve and why it matters.",
    deliverables: [
      "Stakeholder alignment session",
      "Problem & opportunity brief",
      "Core requirement checklist",
    ],
  },
  {
    number: "02",
    title: "Research & Strategy",
    subtitle: "Technical Feasibility & Domain Analysis",
    description:
      "We evaluate the technical landscape, user workflows, data requirements, and integration dependencies—defining a pragmatic strategy that avoids unnecessary complexity.",
    deliverables: [
      "Technical feasibility assessment",
      "User workflow & role mapping",
      "Recommended technology stack",
    ],
  },
  {
    number: "03",
    title: "Plan",
    subtitle: "Architecture Blueprint & Milestone Roadmap",
    description:
      "We translate strategy into a concrete execution plan: database schemas, API contracts, system architecture diagrams, and clear milestone deliverables.",
    deliverables: [
      "System & database architecture spec",
      "Phased delivery roadmap",
      "Feature scope & acceptance criteria",
    ],
  },
  {
    number: "04",
    title: "Design",
    subtitle: "UI/UX Systems & Interactive Prototyping",
    description:
      "Our design team crafts high-contrast, intuitive user interfaces, typography hierarchies, and interactive layouts—ensuring the product feels refined and effortless before code is finalized.",
    deliverables: [
      "Wireframes & user journey flows",
      "Design system tokens & UI components",
      "Responsive desktop & mobile layouts",
    ],
  },
  {
    number: "05",
    title: "Develop",
    subtitle: "Clean, Modular & Maintainable Engineering",
    description:
      "We write strictly typed, modular frontend and backend code using modern frameworks, adhering to security best practices, clean Git commits, and transparent progress updates.",
    deliverables: [
      "Frontend & backend implementation",
      "Database & API integration",
      "Iterative staging previews",
    ],
  },
  {
    number: "06",
    title: "Test",
    subtitle: "Quality Assurance, Security & Device Verification",
    description:
      "Every feature undergoes rigorous testing across desktop and mobile viewports, form edge cases, database constraints, accessibility standards, and performance benchmarks.",
    deliverables: [
      "Cross-browser & mobile responsiveness QA",
      "Functional & edge-case validation",
      "Performance & Lighthouse audit",
    ],
  },
  {
    number: "07",
    title: "Launch",
    subtitle: "Production Deployment & Go-Live Orchestration",
    description:
      "We configure production cloud infrastructure, SSL security, environment variables, domain routing, and analytics—ensuring a smooth, zero-drama release.",
    deliverables: [
      "Production cloud deployment",
      "SSL, DNS & SEO verification",
      "Live environment health check",
    ],
  },
  {
    number: "08",
    title: "Support & Improve",
    subtitle: "Continuous Evolution & Long-Term Partnership",
    description:
      "Software is a living asset. Post-launch, we provide ongoing technical support, performance monitoring, iterative feature enhancements, and scaling guidance.",
    deliverables: [
      "Technical documentation & handover",
      "Ongoing maintenance & updates",
      "Feature expansion support",
    ],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Clinical management systems, patient registration portals, appointment scheduling matrices, and structured medical record workflows.",
    focusAreas: ["Hospital Management Systems", "Appointment Portals", "Billing & Records"],
    iconName: "HeartPulse",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Digital learning platforms, student administration portals, campus safety tools, and AI-assisted educational environments.",
    focusAreas: ["Learning Platforms", "Student Portals", "Safe Digital Communities"],
    iconName: "GraduationCap",
  },
  {
    id: "retail-ecommerce",
    title: "Retail and E-commerce",
    description:
      "High-converting digital storefronts, catalog management systems, inventory synchronization, and frictionless checkout experiences.",
    focusAreas: ["Custom Storefronts", "Inventory Sync", "Order Workflows"],
    iconName: "ShoppingBag",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Property and asset rental platforms, interactive listing discovery, availability calendars, and tenant-owner management consoles.",
    focusAreas: ["Rental Platforms", "Property Discovery", "Booking Workflows"],
    iconName: "Building2",
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Secure client portals, automated billing and invoicing workflows, financial data dashboards, and audit-ready transaction ledgers.",
    focusAreas: ["Billing Automation", "Financial Dashboards", "Secure Portals"],
    iconName: "Landmark",
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Fleet and asset tracking dashboards, dispatch scheduling tools, warehouse inventory logs, and automated status notifications.",
    focusAreas: ["Asset Tracking", "Dispatch Workflows", "Automated Alerts"],
    iconName: "Truck",
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "End-to-end MVP engineering, scalable SaaS architectures, investor-ready product prototypes, and distinctive digital brand identities.",
    focusAreas: ["MVP Engineering", "SaaS Products", "Brand & Web Presence"],
    iconName: "Rocket",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description:
      "Bespoke client onboarding portals, consultation booking systems, document automation, and authoritative corporate websites.",
    focusAreas: ["Corporate Flagships", "Client Onboarding", "Workflow Automation"],
    iconName: "Briefcase",
  },
];

export const WHY_CHOOSE_DATA = [
  {
    number: "01",
    title: "Customer-Focused Development",
    description:
      "Every architectural decision starts with your business objectives and end-user clarity—never technology for technology's sake.",
  },
  {
    number: "02",
    title: "Innovative Thinking",
    description:
      "We combine creative product design with applied AI, automation, and modern web frameworks to build forward-looking solutions.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description:
      "Built on proven, current ecosystems—Next.js, React, TypeScript, Python, Java, Node.js, and modern relational/NoSQL databases.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "Modular codebases, normalized data schemas, and clean API boundaries designed to grow smoothly alongside your business.",
  },
  {
    number: "05",
    title: "Quality-Driven Engineering",
    description:
      "Strict static typing, responsive viewport testing, clean component hierarchies, and thorough QA before every release.",
  },
  {
    number: "06",
    title: "Security-Conscious Development",
    description:
      "Parameterized database queries, validated schemas, role-based access control, and security best practices baked in from day one.",
  },
  {
    number: "07",
    title: "Transparent Communication",
    description:
      "Clear milestone updates, honest technical recommendations, and direct collaboration without confusing jargon or hidden surprises.",
  },
  {
    number: "08",
    title: "Long-Term Technical Support",
    description:
      "We stay committed after launch with clean documentation, maintenance support, and iterative product improvements.",
  },
];

export const MILESTONES_PLACEHOLDERS = [
  {
    id: "milestone-foundation",
    statusBadge: "VERIFIED MILESTONE",
    category: "Company Foundation & Core Architecture",
    title: "TecAura Brand & Multi-Disciplinary Engineering Practice Established",
    period: "Active Phase",
    description:
      "Established core software engineering, UI/UX design, web platform, AI/NLP, and workflow automation capabilities with a unified technical standard.",
    isEditablePlaceholder: false,
  },
  {
    id: "milestone-portfolio",
    statusBadge: "VERIFIED CAPABILITY",
    category: "Core Technical Demonstrations & Systems",
    title: "5 Flagship Product & System Architectures Engineered",
    period: "Current Portfolio",
    description:
      "Completed end-to-end engineering across rental management (SAATH RENTAL), healthcare administration (Java/MySQL), AI cyberbullying detection (Python/NLP), corporate web architecture, and business automation.",
    isEditablePlaceholder: false,
  },
  {
    id: "milestone-certifications",
    statusBadge: "EDITABLE PLACEHOLDER — AWAITING OFFICIAL DATA",
    category: "Certifications & Industry Accreditations",
    title: "[Reserved for Official ISO / Cloud Partner / Security Certifications]",
    period: "Future / Pending Verification",
    description:
      "In accordance with TecAura's authenticity policy, official certifications, cloud partnership badges, and compliance credentials will be published here strictly as they are formally issued.",
    isEditablePlaceholder: true,
  },
  {
    id: "milestone-awards",
    statusBadge: "EDITABLE PLACEHOLDER — AWAITING OFFICIAL DATA",
    category: "Industry Recognition & Verified Client Metrics",
    title: "[Reserved for Audited Client Delivery Milestones & Recognition]",
    period: "Future / Pending Verification",
    description:
      "Editable slot configured in src/data/company.ts for verified commercial milestones, audited delivery statistics, and official industry awards.",
    isEditablePlaceholder: true,
  },
];

export const TESTIMONIALS_PLACEHOLDERS = [
  {
    id: "testimonial-slot-01",
    badge: "EDITABLE CLIENT FEEDBACK SLOT #01",
    quote:
      "This space is reserved for verified client feedback. At TecAura, we never publish fabricated quotes or fictional reviews. Once your project launches and you grant permission, your genuine experience working with our engineering team will be featured here.",
    clientName: "[Client Name — Editable Placeholder]",
    clientRole: "[Founder / CTO / Executive Title]",
    companyName: "[Verified Client Organization]",
    projectType: "Custom Software / Web Engineering",
  },
  {
    id: "testimonial-slot-02",
    badge: "EDITABLE CLIENT FEEDBACK SLOT #02",
    quote:
      "Reserved exclusively for authenticated partner testimonials with explicit publication consent. Can be updated in seconds via src/data/company.ts as new client engagements conclude.",
    clientName: "[Partner Name — Editable Placeholder]",
    clientRole: "[Operations / Product Lead]",
    companyName: "[Verified Partner Company]",
    projectType: "AI & Business Process Automation",
  },
];

