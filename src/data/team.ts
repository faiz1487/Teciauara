export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  bio: string;
  quote: string;
  specialties: string[];
  linkedinUrl?: string;
  githubUrl?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'faiz-founder',
    name: 'Faiz',
    role: 'Founder & Lead Systems Architect',
    location: 'Noida, India',
    avatar: '/team/faiz-founder.jpg',
    bio: 'Systems engineer with a passion for resilient cloud infrastructure, clean codebases, and sub-second web performance. Works directly with clients on architecture design and code review.',
    quote: 'Good engineering is not about complex buzzwords; it is about building software that helps your business run smoothly and never breaks on a Friday night.',
    specialties: ['AWS Cloud Architecture', 'Full-Stack TypeScript', 'DevOps & CI/CD', 'Cost Optimization'],
    linkedinUrl: 'https://linkedin.com/company/teciaura',
    githubUrl: 'https://github.com/teciaura',
  },
  {
    id: 'aravind-frontend',
    name: 'Aravind K.',
    role: 'Senior Frontend & UI Engineer',
    location: 'Delhi NCR, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Frontend specialist obsessive about typography, fluid micro-interactions, mobile accessibility, and achieving 100/100 Core Web Vitals on every screen.',
    quote: 'Your customers judge your credibility in the first 3 seconds. We make sure those 3 seconds feel effortless, fast, and memorable.',
    specialties: ['React & Next.js', 'Tailwind CSS', 'Accessible UX (WCAG)', 'Performance Tuning'],
    linkedinUrl: 'https://linkedin.com/company/teciaura',
    githubUrl: 'https://github.com/teciaura',
  },
  {
    id: 'priya-product',
    name: 'Priya Sharma',
    role: 'Product Strategy & Delivery Lead',
    location: 'Noida, India',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Bridges business goals and engineering execution. Ensures sprint roadmaps are realistic, milestones are demoed on time, and clients stay 100% informed via WhatsApp and Slack.',
    quote: 'No black-box handoffs. You will always know what is being built, why it matters, and when it is going live.',
    specialties: ['Sprint Planning', 'Client Delivery', 'Scope Definition', 'Technical SEO Roadmaps'],
    linkedinUrl: 'https://linkedin.com/company/teciaura',
  },
  {
    id: 'rohit-backend',
    name: 'Rohit Verma',
    role: 'Cloud & Database Engineer',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Backend engineer focused on high-availability databases, automated backup verification, API gateways, and multi-region microservices.',
    quote: 'We architect systems so you can scale from your first 100 users to 100,000 without having to rewrite your entire backend.',
    specialties: ['Docker & Kubernetes', 'PostgreSQL Tuning', 'API Security', 'Redis Caching'],
    linkedinUrl: 'https://linkedin.com/company/teciaura',
    githubUrl: 'https://github.com/teciaura',
  },
];
