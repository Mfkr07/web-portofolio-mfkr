# Product Requirements Document (PRD)
## mfkr.DEV — Personal Web Portfolio & Digital Business Card

---

## 1. Overview

### 1.1 Product Purpose
A premium, highly interactive single-page portfolio website for **M. Fakhri Asshofi (mfkr.DEV)**. The website serves as a digital business card, a technical showcase, and a contact hub. It combines a clean, professional development profile with a distinct, gaming-themed visual shell inspired by RPG fantasy (specifically Albion Online and Alchemist's Guild iconography).

### 1.2 Target Audience
- Tech recruiters, hiring managers, and software leads.
- Potential freelance clients and business partners.
- Open-source collaborators and fellow developers.

### 1.3 Key Objectives
- Establish a strong online presence and personal brand for M. Fakhri Asshofi.
- Showcase modern stack proficiency (React, Next.js, Laravel, Flutter, Supabase) via working project examples.
- Deliver an unforgettable user experience through rich aesthetics, micro-animations, and fluid performance.

---

## 2. Tech Stack & Architecture

| Layer | Technology | Description |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Core application architecture & static page generation. |
| **Language** | TypeScript | Strong typing for clean, maintainable components. |
| **Styling** | Tailwind CSS / Vanilla CSS | High-performance custom layout and medieval gold color palette. |
| **Icons Library** | `tech-stack-icons` | Standardized, high-quality SVG branding logos. |
| **Animation** | Framer Motion & CSS Marquee | Fluid scroll-linked transitions and infinite-loop skills marquee. |
| **Form Handler** | Formspree | Form submission endpoint with custom AJAX JSON handler. |
| **Feedback FX** | `canvas-confetti` | Immediate alchemical sparks confetti on successful message submission. |
| **Deployment** | Vercel | Instant global CDN routing and serverless runtime. |

---

## 3. Section Specifications

### 3.1 Global Navigation (Navbar)
- **Positioning**: Sticky/fixed header with dynamic background blur transiting from transparent to dark crimson-maroon (`#6B1A1A`) when scrolled past 80px.
- **Brand Logo**: `mfkr.DEV` (Cinzel Decorative, gold color `#C9A84C`).
- **Menu Items**: `ABOUT ME`, `SKILLS`, `PROJECT`, `CONTACT`.
- **CTA Button**: "HIRE ME" (Opens direct mailto client).

### 3.2 Section 1: Hero
- **Visuals**: Full-screen layout featuring a custom RPG landscape background (`Hero2.jpeg`), a masked portrait cut-out of the developer (`profile-removebg-preview.png`), and dark gradient overlays.
- **Content**:
  - Eyebrow: `FULL STACK UNEMPLOYMENT` (Italicized gold).
  - Headline: `M. FAKHRI ASSHOFI` (Large display serif).
  - Subtext: `Building responsive, clean, and high-performance web applications with modern technologies.`
- **Stats Counters**:
  - **200-** Projects Completed
  - **300+** Manga/hwa/hua read
  - **2050+** Hours in Albion online
  - *Interaction*: Count-up numbers triggered on page load.

### 3.3 Section 2: About Me
- **Visuals**: Framed parchment card with an Albion voyage banner image (`about-featured.jpg`).
- **Content**:
  - Left Paragraph: Details professional drive, focus on clean architecture, database integration, and intuitive user experiences.
  - Right Paragraph: Outlines stack specialization (Next.js, React, Laravel, Flutter) and commitment to security/scalability best practices.

### 3.4 Section 3: Technical Skills
- **Visuals**: Infinite loop auto-scrolling marquee moving smoothly from left to right.
- **Content**:
  - Title: `TECHNICAL SKILLS`.
  - Icon Grid: 16 technologies (TS, PHP, JS, Laravel, React, Flutter, Python, C++, Next.js, Supabase, Firebase, MySQL, SQLite, Vercel, CSS, HTML).
  - *Framing*: Each icon is rendered inside a medieval masterpiece gold slot frame (`frame_T8_masterpiece-removebg-preview.png`) with scale and glow animations on hover.

### 3.5 Section 4: Projects
- **Visuals**: 2-column responsive card grid.
- **Content**:
  - **AL-AZZHAR KINDERGARTEN & PLAYGROUP LANDING PAGE** (Next.js 15, React 19, TypeScript): Branding and educational portal for Al-Azzhar in Muaraenim.
  - **COOPERATIVE MANAGEMENT SYSTEM (TPK KOPERASI)** (Flutter, Dart): Mobile app for member logs, simpan-pinjam management, and financial accounting.
  - **PALM HARVEST MOBILE APP** (Flutter, Supabase, Dart): Enterprise crop harvest tracking with offline caching and Riverpod state management.
  - **INTERNET CAFE RENTAL PLATFORM** (Laravel, PHP, MySQL): Leasing reservation, workstation checkout, catalog display, and billing invoice printing.
  - **AUTOMATED INTERNET CAFE MANAGEMENT SUITE** (Laravel, PHP, MySQL): Advanced warned rental app with installation automation and code maps.
  - **RURAL ASSET & INFRASTRUCTURE INVENTORY SYSTEM** (Laravel, Supabase, Vercel): Cloud-deployed village asset catalog dashboard using PostgreSQL.
  - **SPASIKOMPUTER INTERFACE PROTOTYPE** (HTML, CSS, JS): Static web prototype for responsive catalog flows and gallery overlays.
- **Repository Links**: Direct "View Repository" redirection link using Github icon.

### 3.6 Section 5: Contact Form
- **Visuals**: Parchment layout with input fields bordered in gold.
- **Fields**: Full Name, Email Address, Subject, Message.
- **Submission**: Formspree API integration.
- **Success Feedback**: Confetti explosion on success, swapping out the form with a "MESSAGE SENT" confirmation screen.

### 3.7 Section 6: Footer
- **Layout**: 3-column structured grid.
- **Columns**:
  - Column 1: Brand title, role ("Full Stack Web Developer"), bio, and "Contact Me" mailto CTA.
  - Column 2: Navigation map (Home, About, Skills, Projects).
  - Column 3: Contact coordinates (Email, GitHub, Location: Palembang, Indonesia) and social icons.
- **Bottom Bar**: Copyright, version V2.0.0, and technical credit: "BUILT WITH NEXT.JS & VANILLA CSS".

---

## 4. Visual Standards & Aesthetics
- **Theme**: RPG Medieval Fantasy Alchemist.
- **Palette**: Dark crimson-maroon (`#6B1A1A`), deep void black (`#0D0D0D`), aged parchment cream (`#F0E6D0`), and old gold accents (`#C9A84C`).
- **Typography**: Cinzel Decorative (Display), Cinzel (Headings), Inter (Body), JetBrains Mono (Monospace/Stats).
- **Icons**: Standard Lucide-React SVG icons for controls, custom tech-stack-icons library for skill grids.

---

## 5. Non-Functional Requirements
- **Performance**: Build optimized by Next.js Compiler. Lighthouse score targets: Performance ≥ 85, Accessibility = 100.
- **Responsiveness**: Responsive down to 320px mobile viewports. Layout stacks into single column on mobile.
- **SEO**: Meta title, tags, sitemap, and Open Graph previews implemented in layout.
- **Code Quality**: Linting checks clean, ESLint warnings ignored for specific LCP image choices.
