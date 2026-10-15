export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  content: string;
  impactMetric: string;
  projectType: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Arjun Sharma',
    role: 'Co-Founder & CEO',
    company: 'FinPulse Systems',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'Teciaura felt like having our own in-house tech lead rather than an agency. There was no sales fluff — just straight answers, weekly video demos, and code delivered on schedule. They rebuilt our client portal with sub-second speeds.',
    impactMetric: 'Launched in 4 Weeks',
    projectType: 'Web & SaaS Platform',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Head of Operations',
    company: 'Vanguard Freight & Logistics',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'We were burnt by large agencies who charged enterprise retainers and assigned junior contractors. Working with Faiz and his team was completely different. Direct WhatsApp communication, transparent pricing, and zero surprises on invoice day.',
    impactMetric: 'Saved $1,400/mo on Cloud',
    projectType: 'AWS & Cloud Automation',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Vikramaditya Roy',
    role: 'Founder',
    company: 'CuraHealth Telemedicine',
    location: 'New Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'Our previous web app was sluggish, taking over 4 seconds to load on mobile. Teciaura re-engineered the frontend using Next.js and optimized our database queries. Load times plummeted to 700ms, and patient sign-ups surged by 32% in month one.',
    impactMetric: 'Load Time: 4.2s ➔ 0.7s',
    projectType: 'Performance & Frontend',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Meera Patel',
    role: 'VP of Growth & E-Commerce',
    company: 'Nirvana Living Retail',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'What impressed me most was their honesty. Instead of pushing expensive server setups, they told us where we were overspending and automated our inventory workflows with simple, maintainable tools. True engineering partners.',
    impactMetric: '+35% Organic Inquiries',
    projectType: 'Custom Apps & Technical SEO',
    rating: 5,
  },
];
