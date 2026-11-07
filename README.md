# TecAura — Official Software & Digital Technology Website

> **INNOVATING TODAY. ENGINEERING TOMORROW.**  
> *BUILDING WHAT'S NEXT.*

Official corporate and engineering platform for **TecAura**, an international software development and digital technology company serving startups, entrepreneurs, SMBs, and enterprises across India and global markets.

---

## 1. Architecture & Technology Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Custom Design System Tokens)
- **Animation:** Framer Motion & GSAP
- **Validation & Forms:** React Hook Form + Zod
- **Email Integration:** Resend SDK (`/api/contact`)
- **Icons:** Lucide React

### Design System Tokens
- **Primary Background:** `#101018`
- **Secondary Background:** `#171721`
- **Primary Text:** `#F5F5FA`
- **Secondary Text:** `#A5A5B5`
- **Accent Violet:** `#7657FF`
- **Electric Blue:** `#21B8E8`
- **Subtle Borders:** `#30303B`
- **Typography:** `Space Grotesk` (Headings) & `Inter` (Body)

---

## 2. Complete Route Map

- `/` — Homepage (Cinematic 4-Scene Intro + 16 Storytelling Sections)
- `/about` — About TecAura (Purpose, Mission, Vision, Philosophy, Approach)
- `/services` — Complete Service Overview
- `/services/software-software-development` — Custom Software Development (also accessible via `/services/custom-software-development` and `/services/software-development`)
- `/services/web-development` — Web Development
- `/services/mobile-development` — Mobile App Development
- `/services/ai-ml` — Artificial Intelligence & Machine Learning
- `/services/ui-ux-design` — UI/UX Design
- `/services/cloud-solutions` — Cloud Solutions
- `/services/automation` — Business Process Automation
- `/services/cybersecurity` — Cybersecurity & IT Consulting
- `/work` — Featured Portfolio Projects
- `/work/[slug]` — Dedicated Case Studies (`saath-rental`, `hospital-management-system`, `ai-cyberbullying-detection`, `business-website`, `business-automation`)
- `/technologies` — Full-Stack Technology Expertise
- `/insights` — Insights & Technical Articles
- `/insights/[slug]` — Individual Engineering Articles
- `/contact` — Validated Project Enquiry Form & Direct Channels
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/sitemap.xml` & `/robots.txt` — Automated SEO Metadata Routes

---

## 3. Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
npm run start
```

---

## 4. Configuring Live Email Delivery (Resend)

The `/api/contact` endpoint validates all submissions on the server using `Zod` and includes honeypot spam protection.

1. Create a free account at [https://resend.com](https://resend.com) and generate an API key.
2. Add your key to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_actual_key
   CONTACT_RECEIVER_EMAIL=hello@tecaura.io
   ```
3. When `RESEND_API_KEY` is present, `/api/contact` dispatches live HTML emails via Resend. When not yet configured, the form transparently validates the payload and provides instant 1-click WhatsApp and Email dispatch buttons so no enquiry is ever lost.

