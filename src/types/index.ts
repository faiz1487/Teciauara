export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  features: string[];
  idealFor: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  type: string;
  shortDescription: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  keyDeliverables: string[];
  technologies: string[];
  architecturePoints: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  isDraft: boolean;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber?: string;
  companyName?: string;
  serviceRequired: string;
  estimatedBudget?: string;
  targetTimeline?: string;
  projectDetails: string;
}
