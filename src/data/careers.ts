export interface JobPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'DevOps & Cloud' | 'Design & UX' | 'Marketing & Growth';
  location: string;
  type: 'Full-Time' | 'Internship' | 'Contract';
  experience: string;
  salary: string;
  featured?: boolean;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
}

export const CAREER_STATS = [
  { value: '100%', label: 'Remote-First', sublabel: 'Work from anywhere in India' },
  { value: '48h', label: 'Fast Review', sublabel: 'Quick response on applications' },
  { value: '₹1.5L', label: 'Learning Stipend', sublabel: 'Annual budget for courses & certs' },
  { value: '4.9★', label: 'Team Culture', sublabel: 'Autonomous, no micromanagement' },
];

export const PERKS_AND_BENEFITS = [
  {
    icon: 'Globe',
    title: 'Work From Anywhere',
    description: 'We are remote-first. Work from wherever you do your best creative and engineering thinking.',
  },
  {
    icon: 'Zap',
    title: 'Modern Tooling & Hardware',
    description: 'Work with the latest hardware, AI developer tooling, Copilot/Claude access, and cloud sandboxes.',
  },
  {
    icon: 'GraduationCap',
    title: 'Certifications & Upskilling',
    description: '100% reimbursement for AWS, Kubernetes (CKA), Terraform, and enterprise design certifications.',
  },
  {
    icon: 'DollarSign',
    title: 'Competitive Compensation',
    description: 'Transparent salary bands, regular appraisals, and quarterly performance-linked bonuses.',
  },
  {
    icon: 'Clock',
    title: 'Flexible Working Hours',
    description: 'We focus on output and milestones, not clock-in surveillance. Coordinate during core overlap hours.',
  },
  {
    icon: 'HeartPulse',
    title: 'Health & Wellness Coverage',
    description: 'Comprehensive medical insurance for you and your family, plus paid mental wellness recharge days.',
  },
];

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'senior-devops-cloud-engineer',
    title: 'Senior Cloud & DevOps Engineer',
    department: 'DevOps & Cloud',
    location: 'Remote (India)',
    type: 'Full-Time',
    experience: '3–6 Years',
    salary: '₹14 LPA – ₹24 LPA + Performance Bonus',
    featured: true,
    shortDescription: 'Lead cloud architecture, Kubernetes orchestration, and zero-downtime CI/CD delivery pipelines across AWS and GCP.',
    description: 'As a Senior Cloud & DevOps Engineer at Teciaura, you will architect resilient cloud infrastructures, automate delivery pipelines for growing products, and guarantee maximum reliability and security for mission-critical client workloads.',
    responsibilities: [
      'Design, provision, and maintain multi-region cloud infrastructures on AWS and GCP using Terraform / OpenTofu.',
      'Architect and manage production Kubernetes clusters (EKS/GKE), Helm charts, and container security profiles.',
      'Implement robust CI/CD pipelines using GitHub Actions and GitLab CI for automated test, build, and zero-downtime deploy cycles.',
      'Establish enterprise telemetry, APM, and alerting with Prometheus, Grafana, and cloud-native logging.',
      'Conduct security audits, VPC peering, IAM least-privilege configurations, and disaster recovery testing.',
    ],
    requirements: [
      '3+ years of verifiable experience managing production Linux environments, AWS/GCP, and containerized microservices.',
      'Deep fluency with Kubernetes, Docker, and Infrastructure as Code (Terraform).',
      'Solid scripting expertise in Bash, Python, or Go.',
      'Strong grasp of networking principles (VPCs, Subnets, DNS, Load Balancers, SSL/TLS, CDN configurations).',
    ],
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'Prometheus', 'Linux', 'GCP'],
    benefits: ['100% Remote', 'AWS/CKA Cert Reimbursement', 'Annual Bonus', 'Home Office Stipend'],
  },
  {
    id: 'full-stack-engineer-react-node',
    title: 'Full-Stack Engineer (React & Node.js / TypeScript)',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-Time',
    experience: '2–5 Years',
    salary: '₹10 LPA – ₹20 LPA',
    featured: true,
    shortDescription: 'Build ultra-responsive web applications, scalable REST/GraphQL APIs, and database architectures using modern TypeScript.',
    description: 'We are seeking a versatile Full-Stack Engineer who enjoys building end-to-end features. You will craft engaging frontend user experiences and resilient backend microservices for startups and scale-ups.',
    responsibilities: [
      'Build responsive, accessible, and high-performance web applications using React, Next.js, and Tailwind CSS.',
      'Design and deploy RESTful and GraphQL APIs with Node.js, Express/NestJS, and PostgreSQL.',
      'Model relational databases, write efficient migrations with Prisma/Drizzle, and implement Redis caching layers.',
      'Write comprehensive unit and integration tests (Jest, Vitest, Playwright).',
      'Collaborate closely with UI/UX designers to translate Figma prototypes into interactive digital products.',
    ],
    requirements: [
      '2+ years of professional development experience in modern TypeScript, React, and Node.js.',
      'Solid understanding of frontend state management, server-side rendering (SSR), and React server components.',
      'Practical experience with relational databases (PostgreSQL/MySQL) and caching strategies (Redis).',
      'Familiarity with Git branching workflows and automated CI/CD deployments.',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Prisma', 'Redis'],
    benefits: ['Remote Flexibility', 'Learning Budget', 'Health Insurance', 'Hardware Allowance'],
  },
  {
    id: 'frontend-developer-react-tailwind',
    title: 'Frontend Developer (React & Modern UI)',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Full-Time',
    experience: '1–3 Years',
    salary: '₹6 LPA – ₹12 LPA',
    featured: false,
    shortDescription: 'Craft pixel-perfect, accessible, and high-performance user interfaces with React, Tailwind CSS, and Framer Motion.',
    description: 'Join our frontend team to build polished, interactive interfaces for modern web platforms, dashboards, and marketing sites with high visual standards and crisp responsiveness.',
    responsibilities: [
      'Implement responsive layouts from Figma designs with 100% design fidelity and micro-interactions.',
      'Develop modular, reusable design system components utilizing Tailwind CSS and Radix UI / shadcn.',
      'Optimize Core Web Vitals, page rendering performance, and bundle footprints.',
      'Ensure cross-browser compatibility and strict accessibility (WCAG 2.1 AA) compliance.',
    ],
    requirements: [
      '1–3 years of hands-on experience developing web applications with React, TypeScript, and modern CSS.',
      'Expert proficiency in Tailwind CSS and modern CSS layouts (Flexbox, CSS Grid).',
      'Strong eye for visual hierarchy, spacing, typography, and motion transitions.',
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma-to-Code', 'Vite', 'HTML5/CSS3'],
    benefits: ['Remote Work', 'Flexible Schedule', 'Performance Incentives', 'Tech Books Budget'],
  },
  {
    id: 'ui-ux-product-designer',
    title: 'UI/UX Product Designer',
    department: 'Design & UX',
    location: 'Remote (India / Global)',
    type: 'Full-Time',
    experience: '2–4 Years',
    salary: '₹8 LPA – ₹16 LPA',
    featured: true,
    shortDescription: 'Own product wireframes, high-fidelity UI design systems, and delightful user journeys for tech and SaaS platforms.',
    description: 'We are looking for a UI/UX Product Designer with a sharp visual aesthetic and deep empathy for user flows. You will define the visual and interaction standards for Teciaura client solutions.',
    responsibilities: [
      'Design intuitive wireframes, clickable prototypes, and high-fidelity mockups in Figma.',
      'Build and maintain scalable design systems with comprehensive token structures and component libraries.',
      'Conduct user journey analysis, competitor benchmarking, and usability testing.',
      'Collaborate side-by-side with frontend engineers during handoff and implementation QA.',
    ],
    requirements: [
      '2+ years of UI/UX design experience with a strong portfolio showcasing web apps and SaaS interfaces.',
      'Mastery of Figma (auto-layout, components, variants, variables, interactive prototyping).',
      'Strong knowledge of design psychology, accessibility standards, and responsive web design.',
    ],
    skills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research', 'Prototyping', 'Interaction Design'],
    benefits: ['Remote First', 'Figma Pro & Tooling Budget', 'Paid Design Conferences', 'Flexible Hours'],
  },
  {
    id: 'technical-seo-growth-specialist',
    title: 'Technical SEO & Digital Growth Strategist',
    department: 'Marketing & Growth',
    location: 'Remote (India)',
    type: 'Full-Time',
    experience: '2–4 Years',
    salary: '₹6 LPA – ₹14 LPA',
    featured: false,
    shortDescription: 'Drive organic search visibility, technical audit resolution, and conversion-focused growth campaigns for digital products.',
    description: 'Help Teciaura and our clients climb search engine rankings and convert high-intent traffic into business inquiries through structured technical SEO and analytics.',
    responsibilities: [
      'Perform deep technical SEO audits covering crawling, indexing, canonicalization, Core Web Vitals, and structured data.',
      'Formulate keyword maps, content briefs, and on-page optimization strategies for B2B tech audiences.',
      'Track, analyze, and report search rankings, referral funnels, and organic conversions using GA4 and Search Console.',
      'Collaborate with developers to execute technical fixes on React and Next.js websites.',
    ],
    requirements: [
      '2+ years of proven success in technical SEO, organic traffic generation, and content growth.',
      'Hands-on proficiency with Ahrefs, SEMrush, Google Search Console, Screaming Frog, and GA4.',
      'Understanding of JavaScript SEO nuances in SPAs and modern web applications.',
    ],
    skills: ['Technical SEO', 'Google Analytics 4', 'Ahrefs', 'Search Console', 'Schema Markup', 'Content Strategy'],
    benefits: ['Remote Work', 'Growth Incentive Bonus', 'SEO Tooling Stack', 'Fast Growth Pathway'],
  },
  {
    id: 'cloud-devops-intern',
    title: 'Cloud & DevOps Intern / Associate',
    department: 'DevOps & Cloud',
    location: 'Remote (India)',
    type: 'Internship',
    experience: '0–1 Year (Fresher / Final Year)',
    salary: '₹20,000 – ₹35,000 / month + Pre-Placement Offer (PPO)',
    featured: false,
    shortDescription: 'Kickstart your career in cloud engineering, containerization with Docker, and CI/CD workflow automation.',
    description: 'An exceptional opportunity for ambitious freshers or final-year students eager to master modern DevOps and cloud infrastructure alongside seasoned senior architects.',
    responsibilities: [
      'Learn and assist in provisioning AWS cloud resources and building Docker containers.',
      'Support writing CI/CD automation scripts using GitHub Actions.',
      'Assist in monitoring server health, logs, and system metrics.',
      'Document deployment checklists and operational playbooks.',
    ],
    requirements: [
      'Strong foundational knowledge of Linux command line, networking basics (TCP/IP, HTTP/S, DNS), and Git.',
      'Familiarity with at least one scripting language (Python, Bash, or JavaScript).',
      'Passionate drive to learn Cloud and DevOps engineering with high curiosity.',
    ],
    skills: ['Linux', 'Git', 'Docker Basics', 'Bash', 'AWS Basics', 'Networking'],
    benefits: ['Paid Internship', '1-on-1 Mentorship', 'Pre-Placement Offer (PPO)', 'Remote Work'],
  },
];
