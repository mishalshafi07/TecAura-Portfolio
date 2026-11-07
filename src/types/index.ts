export interface ServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  deliverables: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  useCases: string[];
  processHighlight: string;
}

export type ProjectClassification =
  | "Independent Product Architecture"
  | "System Engineering Demonstration"
  | "Applied AI Research & Prototype"
  | "Digital Brand & Web Demonstration"
  | "Workflow Automation Demonstration";

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  classification: ProjectClassification;
  classificationNote: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  challenges: string[];
  proposedSolution: string;
  designApproach: string;
  developmentProcess: {
    phase: string;
    detail: string;
  }[];
  technologies: string[];
  architectureHighlights: string[];
  outcomes: string[];
  featured: boolean;
  accentColor: string;
  secondaryColor: string;
  imageUrl?: string;
  visualType:
    | "textiles"
    | "cybershield"
    | "buraq-mep"
    | "juice-brand"
    | "saath-rental"
    | "apex-machinery"
    | "itam-software"
    | "email-faq-bot"
    | "ai-rag-bot"
    | "rental"
    | "hospital"
    | "ai-shield"
    | "business-web"
    | "automation";
  liveDemoUrl?: string;
  githubUrl?: string;
  screens: {
    title: string;
    caption: string;
    metricsOrTags: string[];
  }[];
}

export interface TechCategory {
  id: string;
  category: string;
  subtitle: string;
  description: string;
  items: {
    name: string;
    role: string;
    level: string;
    codeSymbol: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  iconName: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category:
    | "Artificial Intelligence"
    | "Software Development"
    | "Technology Trends"
    | "Business Automation"
    | "Digital Transformation"
    | "Cybersecurity";
  publishedAt: string;
  readTime: string;
  excerpt: string;
  authorRole: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    body: string[];
    codeSnippet?: {
      language: string;
      caption: string;
      code: string;
    };
  }[];
}

