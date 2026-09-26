# Teciaura Technologies — Corporate Website

> **Build. Deploy. Grow.**  
> *Technology that moves your business forward.*

A complete, responsive, production-ready corporate website for **Teciaura Technologies**, built with React 19, TypeScript, Tailwind CSS, Vite, and Lucide icons. Designed with a clear visual hierarchy, accessible interactions, and transparent conversion paths for startups, growing businesses, and international enterprises.

---

## 🎨 Brand Design System & Color Palette

| Token | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#0B1F44` | Main brand color, headings, hero visual base, primary CTA cards |
| **Secondary Navy** | `#102A56` | Card borders, secondary containers, deeper contrast accents |
| **Electric Blue** | `#1677FF` | Primary action buttons, active navigation indicators, key highlights |
| **Cyan Accent** | `#00C8E8` | High-impact accent points, status badges, secondary gradient stop |
| **White** | `#FFFFFF` | Primary section backgrounds, card surfaces |
| **Light Background** | `#F4F8FC` | Alternate section strips, subtle badge backgrounds |
| **Body Text** | `#475569` | High-legibility paragraphs and explanatory copy |
| **Muted Text** | `#64748B` | Timestamps, subtitles, secondary metadata |
| **Border Color** | `#DCE6F2` | Subtle dividers, card borders, form input outlines |
| **Footer Background** | `#07152E` | Deep navy footer and sub-footer backdrop |

**Primary Gradient:** `linear-gradient(135deg, #00C8E8 0%, #1677FF 50%, #0B1F44 100%)`

---

## 📑 Website Pages & Routes

1. **Home (`/`)**
   - **Hero Section**: Eyebrow `TECHNOLOGY + DIGITAL GROWTH`, bold headline, clear CTAs, and an abstract code-rendered technology illustration (connected cloud nodes, automated CI/CD pipeline, and system health status).
   - **Trust / Value Strip**: Horizontal strip with 4 concise value propositions.
   - **Services Overview**: 6 cards with Lucide icons, scope highlights, and "Learn More" links.
   - **Why Choose Teciaura**: 4 value pillars (Practical Solutions, Reliable Delivery, Scalable Foundations, One Technology Partner).
   - **Featured Work / Portfolio**: Clearly labeled demo and concept blueprints with interactive detail modals.
   - **Our Process**: 4-phase methodology (`01 Discover`, `02 Plan`, `03 Build`, `04 Launch & Support`).
   - **CTA Banner**: Deep navy background with subtle cyan & blue gradient accents.
   - **FAQ Accordion**: 6 comprehensive, professional answers with accessible open/close states.
   - **Final Contact CTA**: Prominent closing banner to initiate direct collaboration.

2. **Services (`/services`)**
   - Polished hero and 6 deep-dive service breakdown sections:
     1. Cloud & DevOps (AWS, IaC, Docker, CI/CD, Monitoring, Optimization)
     2. Website Development (Responsive business sites, Landing pages, E-commerce, SEO foundation)
     3. Software & App Development (Web apps, Dashboards, APIs, Database systems)
     4. Digital Marketing & SEO (Technical SEO, On-page, Local SEO, Content strategy)
     5. Social Media Management (Content planning, Post design, Profile optimization)
     6. IT Support & Maintenance (Troubleshooting, Backups, Server care, Maintenance)
   - Deliverables checklists and direct inquiry triggers for each service.

3. **About Us (`/about`)**
   - Company Story, Mission, Vision, and 5 Core Values (Transparency, Practical Innovation, Reliability, Continuous Improvement, Customer Partnership).
   - "How We Work" 3-step operational principle breakdown.
   - Clean placeholders for formal corporate filings.

4. **Portfolio / Case Studies (`/portfolio`)**
   - Interactive category filter pills (`All`, `Cloud & DevOps`, `Web Development`, `Software`, `Automation`).
   - Demo project cards with tech stack badges.
   - Interactive specification modal revealing challenges, solutions, and technical highlights.

5. **Blog / Insights (`/insights`)**
   - Real-time search query filtering and category tabs.
   - Featured article showcase and responsive article grid.
   - 5 comprehensive educational draft guides (DevOps, AWS Cost Optimization, Mobile-Friendly Web, CI/CD Pipelines, Technical SEO).
   - Interactive full-text reader modal with one-click link sharing.

6. **Contact Us (`/contact`)**
   - Complete project inquiry form: Full Name, Business Email, Phone (optional), Company (optional), Service Required dropdown, Budget range, and Project Details.
   - Real-time validation, accessible error alerts, honeypot anti-spam protection, and loading state.
   - Transparent backend integration note with client-side payload inspection and direct mailto link generation.
   - Direct communication channels: WhatsApp direct chat, Email (`hello@teciaura.com`), Phone placeholder, and Location (India).

7. **Privacy Policy (`/privacy`)**
   - Legally sound data governance terms, client confidentiality commitments, and NDA readiness.

8. **Terms and Conditions (`/terms`)**
   - Statement of Work (SOW) principles, intellectual property rights, and commercial policies.

9. **404 Not Found (`*`)**
   - Clean branded recovery page with direct buttons to return home or explore services.

---

## 🛠️ Technology Stack

- **Framework:** React 19 (Vite)
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React (with custom inline SVG brand glyphs)
- **Routing:** React Router DOM 7
- **Typography:** Inter (via Google Fonts)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended, verified on v24)
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/teciaura-website.git
cd teciaura-website

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
# Compile TypeScript and bundle with Vite
npm run build

# Preview the production build locally
npm run preview
```

The compiled output will be generated inside the `dist/` directory, optimized with gzip compression and cache-busting filenames.

---

## ⚙️ Configuration & Customization

### Updating Contact Information
Edit [`src/data/companyInfo.ts`](file:///src/data/companyInfo.ts) to update phone numbers, emails, physical addresses, or WhatsApp numbers across the entire website from one single file:

```typescript
export const COMPANY_INFO = {
  contact: {
    email: 'your-email@teciaura.com',
    phonePlaceholder: '+91 98765 43210',
    whatsappNumber: '+919876543210',
    // ...
  }
};
```

### Connecting Contact Form to a Backend
In [`src/components/contact/ContactForm.tsx`](file:///src/components/contact/ContactForm.tsx), replace the simulation in `handleSubmit` with your API endpoint:

```typescript
// Example: Formspree, Resend, or your custom API
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 🌐 Deployment Instructions

### Vercel
1. Push your repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### Netlify
Create a `netlify.toml` file or set the publish directory to `dist` and build command to `npm run build`. Add a redirect rule for SPA routing:
```
/*    /index.html   200
```

---

## 📄 License & Attribution
© 2026 Teciaura Technologies. All rights reserved.
