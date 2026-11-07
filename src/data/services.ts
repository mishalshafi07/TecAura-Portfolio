import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "software-software-development",
    aliases: ["custom-software-development", "software-development"],
    number: "01",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Bespoke enterprise-grade systems engineered around your operational logic.",
    description:
      "We architect and build tailored software applications that solve complex operational bottlenecks, unify fragmented data workflows, and scale reliably as your organization grows.",
    longDescription:
      "Off-the-shelf software often forces businesses to adapt their processes to rigid templates. At TecAura, we engineer custom software from the ground up—designed specifically around your domain logic, user permissions, data models, and long-term product roadmap. From internal management systems to multi-tenant SaaS products, every line of code is written for maintainability, security, and performance.",
    iconName: "Code2",
    deliverables: [
      "Full-stack custom web & desktop applications",
      "Multi-tenant SaaS product engineering",
      "RESTful & GraphQL API architecture",
      "Relational & document database modeling",
      "Legacy application modernization & refactoring",
      "Automated testing suites & technical documentation",
    ],
    capabilities: [
      {
        title: "Domain-Driven Architecture",
        description:
          "Software modularized around your core business logic so new features can be introduced cleanly without breaking existing workflows.",
      },
      {
        title: "Scalable Data Foundations",
        description:
          "Carefully indexed MySQL, PostgreSQL, and MongoDB schemas designed for transactional integrity and fast query execution.",
      },
      {
        title: "Secure Role-Based Access",
        description:
          "Granular authentication and authorization controls tailored to multi-department organizations and external stakeholders.",
      },
      {
        title: "API-First Extensibility",
        description:
          "Clean service interfaces that allow your core application to communicate seamlessly with payment gateways, ERPs, and mobile clients.",
      },
    ],
    technologies: ["Java", "Python", "Node.js", "TypeScript", "PostgreSQL", "MySQL", "Docker"],
    useCases: [
      "Healthcare & hospital resource management platforms",
      "Asset rental, booking, and inventory control systems",
      "Bespoke ERP & CRM modules for growing enterprises",
      "Multi-vendor marketplace backends",
    ],
    processHighlight:
      "We begin with deep domain modeling and database schema verification before writing application code, ensuring zero structural surprises during scale.",
  },
  {
    id: "web-development",
    slug: "web-development",
    number: "02",
    title: "Web Development",
    shortTitle: "Web Engineering",
    tagline: "High-velocity web platforms and digital brand experiences built with modern frameworks.",
    description:
      "From high-converting flagship brand websites to complex interactive web portals, we craft fast, accessible, and search-optimized web experiences using Next.js, React, and TypeScript.",
    longDescription:
      "Your web presence is frequently the first technical interaction a client has with your brand. We combine modern frontend engineering (React, Next.js App Router, TypeScript, Tailwind CSS) with resilient backend APIs to deliver web applications that load instantaneously, respond fluidly across every viewport, and rank effectively on search engines.",
    iconName: "Globe",
    deliverables: [
      "Next.js & React single-page and server-rendered web apps",
      "Flagship corporate & international brand websites",
      "Customer portals, dashboards & interactive web platforms",
      "E-commerce storefronts & custom checkout experiences",
      "Core Web Vitals & Lighthouse performance optimization",
      "Technical SEO & semantic accessibility implementation",
    ],
    capabilities: [
      {
        title: "Server-First Rendering & Edge Speed",
        description:
          "Leveraging Next.js Server Components and static generation where appropriate for near-instant initial page loads and strong SEO.",
      },
      {
        title: "Interactive Motion Systems",
        description:
          "Purposeful, hardware-accelerated transitions using Framer Motion and GSAP that elevate brand perception without hurting usability.",
      },
      {
        title: "Responsive Component Systems",
        description:
          "Reusable, strictly typed UI libraries built with Tailwind CSS that maintain visual precision from 320px mobile screens to 4K monitors.",
      },
      {
        title: "Headless CMS & API Integration",
        description:
          "Seamless integration with structured content backends, payment processors, analytics pipelines, and CRM tools.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Node.js"],
    useCases: [
      "International corporate & technology brand websites",
      "Interactive SaaS customer dashboards",
      "Real-time booking and reservation portals",
      "High-conversion product launch platforms",
    ],
    processHighlight:
      "Every web platform is tested against strict Core Web Vitals thresholds, keyboard accessibility standards, and multi-device viewports before launch.",
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    number: "03",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Intuitive, responsive mobile experiences designed for modern iOS and Android ecosystems.",
    description:
      "We design and develop mobile-first applications and progressive mobile solutions with clean navigation, offline resilience, and secure cloud synchronization.",
    longDescription:
      "Modern users expect desktop-class reliability inside their pocket. We engineer mobile applications and responsive mobile-ready platforms that prioritize fast startup times, thumb-friendly interaction patterns, battery efficiency, and reliable API synchronization—even on fluctuating network connections.",
    iconName: "Smartphone",
    deliverables: [
      "Cross-platform iOS & Android application engineering",
      "Progressive Web Applications (PWAs) with offline support",
      "Mobile backend APIs & real-time notification pipelines",
      "Biometric authentication & secure local token storage",
      "Mobile UI/UX prototyping & interaction design",
      "App Store & Google Play deployment readiness",
    ],
    capabilities: [
      {
        title: "Unified Cross-Platform Codebases",
        description:
          "Deliver consistent feature parity across iOS and Android while reducing maintenance overhead and time-to-market.",
      },
      {
        title: "Real-Time State & Push Sync",
        description:
          "Instant updates for bookings, order tracking, chat messages, and critical alerts backed by lightweight REST and WebSocket endpoints.",
      },
      {
        title: "Touch-First Ergonomics",
        description:
          "Gesture navigation, micro-feedback, and clear typographic hierarchies designed specifically for handheld viewports.",
      },
      {
        title: "Secure API Communication",
        description:
          "End-to-end TLS encryption, token rotation, and strict payload validation between mobile clients and cloud servers.",
      },
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
    useCases: [
      "On-demand rental and service booking apps",
      "Field operations and inventory companion apps",
      "Patient & appointment scheduling mobile portals",
      "Consumer community and marketplace apps",
    ],
    processHighlight:
      "We prototype interactive mobile flows early so stakeholders can test real touch ergonomics before backend integration is finalized.",
  },
  {
    id: "ai-ml",
    slug: "ai-ml",
    number: "04",
    title: "Artificial Intelligence & Machine Learning",
    shortTitle: "AI & Machine Learning",
    tagline: "Practical intelligence: NLP, computer vision, and LLM workflows integrated into real software.",
    description:
      "We move beyond AI hype to build practical machine learning pipelines, natural language classifiers, computer vision modules, and LLM-powered workflows that solve measurable problems.",
    longDescription:
      "Artificial intelligence delivers real value when embedded cleanly into everyday software workflows. Our AI & Machine Learning engineering covers text classification, automated content moderation, intelligent document extraction, semantic search, and Large Language Model (LLM) orchestration—built with transparent evaluation metrics and human-in-the-loop safeguards.",
    iconName: "Cpu",
    deliverables: [
      "Natural Language Processing (NLP) & sentiment/toxicity detection",
      "Large Language Model (LLM) integration & RAG pipelines",
      "Supervised machine learning & deep learning models",
      "Computer vision inspection & classification workflows",
      "Python inference APIs integrated into web/mobile products",
      "Dataset preprocessing, feature engineering & model evaluation",
    ],
    capabilities: [
      {
        title: "Natural Language Understanding",
        description:
          "Text classification, automated moderation (such as cyberbullying and harassment detection), intent extraction, and multilingual processing.",
      },
      {
        title: "LLM & Retrieval-Augmented Generation",
        description:
          "Context-aware assistants grounded in your organization's verified documentation and databases with strict guardrails.",
      },
      {
        title: "Predictive & Classification Models",
        description:
          "Custom Python machine learning pipelines trained and validated to surface anomalies, categorize records, and assist decision-makers.",
      },
      {
        title: "Production-Ready Inference APIs",
        description:
          "Packaging trained models behind fast, containerized Python microservices that your web and enterprise apps can query reliably.",
      },
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Large Language Models", "Docker"],
    useCases: [
      "Automated cyberbullying and toxic content detection",
      "Intelligent support ticket triage & document summarization",
      "Knowledge-base Q&A assistants for internal teams",
      "Visual defect or document classification pipelines",
    ],
    processHighlight:
      "Every AI model we build is evaluated for precision, recall, latency, and edge-case failure modes—never deployed as an untested black box.",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortTitle: "UI/UX & Product Design",
    tagline: "Editorial precision meets effortless human interaction across digital products.",
    description:
      "We design cohesive digital interfaces, scalable design systems, and intuitive user journeys that make complex software feel calm, clear, and unmistakably premium.",
    longDescription:
      "Great design is not superficial decoration—it is how a digital product works and communicates trust. We pair thorough user-flow mapping and information architecture with striking visual direction, creating comprehensive design systems where typography, color contrast, spacing, and interactive states work in complete harmony.",
    iconName: "Layers",
    deliverables: [
      "User journey mapping & information architecture",
      "Wireframes & interactive high-fidelity prototypes",
      "Comprehensive multi-platform Design Systems & token libraries",
      "SaaS dashboard & complex data visualization design",
      "Motion design specifications & micro-interaction guidelines",
      "WCAG accessibility & contrast auditing",
    ],
    capabilities: [
      {
        title: "Design Systems That Scale",
        description:
          "Tokenized typography, color palettes, grid rules, and reusable component specs that translate directly into clean Tailwind and React code.",
      },
      {
        title: "Complex Workflow Simplification",
        description:
          "Turning dense multi-step enterprise forms, medical records, or financial data into clear, distraction-free user interfaces.",
      },
      {
        title: "Editorial Brand Expression",
        description:
          "Crafting distinctive visual identities that set ambitious startups and technology companies apart from generic templates.",
      },
      {
        title: "Design-to-Engineering Continuity",
        description:
          "Because our designers and engineers collaborate closely, visual fidelity and motion nuances are preserved all the way to production.",
      },
    ],
    technologies: ["UI Systems", "Design Tokens", "Interactive Prototyping", "Tailwind CSS", "Framer Motion", "Accessibility (WCAG)"],
    useCases: [
      "Complete brand and web redesigns for tech startups",
      "Complex SaaS admin consoles and analytics portals",
      "Multi-step onboarding and checkout conversion flows",
      "Unified design systems across web and mobile products",
    ],
    processHighlight:
      "We design directly with production constraints and real content in mind, eliminating the gap between static mockups and live software.",
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    number: "06",
    title: "Cloud Solutions",
    shortTitle: "Cloud & Infrastructure",
    tagline: "Resilient cloud architecture, containerized deployments, and automated CI/CD pipelines.",
    description:
      "We configure, deploy, and optimize cloud environments across AWS, Google Cloud, and Microsoft Azure using Docker containers and automated deployment workflows.",
    longDescription:
      "Modern software demands infrastructure that is repeatable, secure, and cost-efficient. We help organizations transition from fragile manual server setups to containerized cloud architectures across AWS, Google Cloud, and Microsoft Azure—complete with automated CI/CD pipelines, managed databases, SSL encryption, and uptime monitoring.",
    iconName: "Cloud",
    deliverables: [
      "Cloud architecture setup on AWS, Google Cloud & Azure",
      "Docker containerization & multi-stage build optimization",
      "Automated CI/CD deployment pipelines via GitHub Actions & Vercel",
      "Managed relational & NoSQL database provisioning & backups",
      "Environment isolation (Development, Staging, Production)",
      "Cloud cost auditing & performance tuning",
    ],
    capabilities: [
      {
        title: "Containerized Consistency",
        description:
          "Using Docker to guarantee that applications run identically across developer machines, staging servers, and production clusters.",
      },
      {
        title: "Zero-Downtime CI/CD Pipelines",
        description:
          "Automated build, lint, test, and deployment workflows triggered directly from Git version control.",
      },
      {
        title: "Multi-Cloud Flexibility",
        description:
          "Selecting the right services across AWS, Google Cloud, Azure, and Vercel based on workload requirements and budget.",
      },
      {
        title: "Database Reliability & Backups",
        description:
          "Configured connection pooling, encrypted storage, and automated snapshot schedules for MySQL, PostgreSQL, and MongoDB.",
      },
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Git", "GitHub", "PostgreSQL", "MySQL"],
    useCases: [
      "Cloud migration for legacy on-premise applications",
      "Containerized microservice deployments",
      "High-availability web application hosting",
      "Automated staging and production release workflows",
    ],
    processHighlight:
      "Infrastructure configurations are documented and version-controlled so deployments remain predictable and recoverable at any time.",
  },
  {
    id: "automation",
    slug: "automation",
    number: "07",
    title: "Business Process Automation",
    shortTitle: "Process Automation",
    tagline: "Eliminate repetitive manual work through intelligent triggers, webhooks, and custom scripts.",
    description:
      "We connect disconnected tools, automate data entry, orchestrate lead and invoicing workflows, and build custom automation scripts that save hours of manual operational effort.",
    longDescription:
      "Growing teams often lose hundreds of hours every month copying data between spreadsheets, emails, CRMs, and billing tools. We analyze your operational bottlenecks and engineer reliable automation pipelines—combining custom Python and Node.js services, webhook orchestrations, and scheduled tasks—so your team can focus on high-value work.",
    iconName: "Workflow",
    deliverables: [
      "End-to-end workflow automation & webhook orchestration",
      "Automated lead capture, routing & CRM synchronization",
      "Scheduled data extraction, transformation & reporting scripts",
      "Automated invoice, receipt & document generation",
      "Custom API bridges between third-party SaaS tools",
      "Execution logging, error alerting & retry mechanisms",
    ],
    capabilities: [
      {
        title: "Cross-Platform API Bridges",
        description:
          "Connecting CRM platforms, communication channels, databases, and email providers into a single synchronized flow.",
      },
      {
        title: "Automated Document & Report Pipelines",
        description:
          "Generating formatted PDFs, financial summaries, and operational alerts automatically on schedule or event triggers.",
      },
      {
        title: "Idempotent & Fault-Tolerant Execution",
        description:
          "Built-in validation, deduplication, and dead-letter logging so network hiccups never cause duplicate records or lost data.",
      },
      {
        title: "Real-Time Operational Visibility",
        description:
          "Clear status dashboards and instant notifications via email or WhatsApp when high-priority business events occur.",
      },
    ],
    technologies: ["Python", "Node.js", "TypeScript", "REST Webhooks", "PostgreSQL", "MongoDB", "Docker"],
    useCases: [
      "Automated client onboarding and enquiry triage",
      "Inventory threshold alerts and supplier order generation",
      "Multi-channel notification & reporting systems",
      "Automated reconciliation between booking and billing records",
    ],
    processHighlight:
      "We map every manual step and exception case before automating, ensuring your workflows handle real-world edge cases gracefully.",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    number: "08",
    title: "Cybersecurity & IT Consulting",
    shortTitle: "Cybersecurity & Consulting",
    tagline: "Security-conscious engineering, application hardening, and strategic technology advisory.",
    description:
      "We help businesses secure their web applications, protect sensitive user data, audit codebases for vulnerabilities, and make confident architectural technology decisions.",
    longDescription:
      "Security cannot be an afterthought bolted on after launch. Our Cybersecurity & IT Consulting practice focuses on secure software architecture, OWASP vulnerability mitigation, authentication hardening, data encryption, and pragmatic IT roadmap consulting—helping startups and enterprises build digital products that customers can trust.",
    iconName: "ShieldCheck",
    deliverables: [
      "Web application security audits & OWASP Top 10 remediation",
      "Authentication, session management & RBAC security hardening",
      "API rate-limiting, input sanitization & SQL/XSS protection",
      "Data privacy & secure storage architecture review",
      "AI-assisted content safety & abuse detection consulting",
      "Technology stack selection & architecture advisory",
    ],
    capabilities: [
      {
        title: "Application Layer Hardening",
        description:
          "Protecting web applications and APIs against injection attacks, broken access control, cross-site scripting (XSS), and CSRF.",
      },
      {
        title: "Identity & Access Architecture",
        description:
          "Implementing secure password hashing, JWT/session lifecycles, multi-factor workflows, and least-privilege database access.",
      },
      {
        title: "Platform Trust & Content Safety",
        description:
          "Combining rule-based filters with machine learning classifiers to protect user platforms from spam, abuse, and cyberbullying.",
      },
      {
        title: "Pragmatic IT Strategy",
        description:
          "Clear, vendor-neutral technical guidance helping founders and executives choose maintainable stacks without over-engineering.",
      },
    ],
    technologies: ["Application Security", "OWASP Standards", "Python", "TypeScript", "Node.js", "Cloud Security", "NLP Moderation"],
    useCases: [
      "Pre-launch security review for SaaS and web platforms",
      "Securing patient or customer data in relational databases",
      "Implementing automated abuse and toxicity detection",
      "Technical architecture due diligence and modernization planning",
    ],
    processHighlight:
      "We embed security controls directly into the codebase and deployment pipeline rather than delivering static PDF checklists alone.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find(
    (s) => s.slug === slug || (s.aliases && s.aliases.includes(slug))
  );
}

