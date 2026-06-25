export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  loreDescription: string;
  thumbnail: string;
  githubLink: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AL-AZZHAR KINDERGARTEN & PLAYGROUP LANDING PAGE",
    category: "Frontend Web Development",
    description: "An interactive, responsive branding and informational web portal developed for the Al-Azzhar educational institution in Muaraenim. Engineered using Next.js 15, React 19, and TypeScript, featuring fluid UI micro-animations and slide effects to maximize user engagement.",
    loreDescription: "Next.js 15 + React 19 + TypeScript landing page featuring fluid page animations and modern accessibility controls.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/Landing-page-tk-dan-playgroup-alazhar",
    tech: ["nextjs", "react", "ts"]
  },
  {
    id: "2",
    title: "COOPERATIVE MANAGEMENT SYSTEM (TPK KOPERASI)",
    category: "Cross-Platform Mobile Application",
    description: "A robust mobile application designed to streamline cooperative business operations. Built on Flutter and Dart, this system facilitates secure member registry tracking, transaction logs, and simpan-pinjam (savings/loans) accounting records.",
    loreDescription: "Flutter mobile application implementing offline simulation, robust state tracking, and local accounting structures.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/Sistem_koperasi",
    tech: ["flutter", "dart"]
  },
  {
    id: "3",
    title: "PALM HARVEST MOBILE APP",
    category: "Enterprise Mobile & Backend",
    description: "A specialized enterprise mobile application built for oil palm harvesting workflow supervision. Leverages Flutter with Riverpod state management and go_router navigation, integrated with Supabase for real-time cloud data synchronization and offline caching.",
    loreDescription: "Production-grade Flutter application backed by Supabase cloud functions and Riverpod state managers.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/Sistem_Manajemen_Panen_Sawit",
    tech: ["flutter", "supabase", "dart"]
  },
  {
    id: "4",
    title: "INTERNET CAFE RENTAL PLATFORM",
    category: "Full Stack Web Application",
    description: "A full-stack internet cafe leasing and workstation management system. Built with Laravel and PHP, this application supports workstation catalog grids, member authentication, workstation reservations, billing invoice generator, and automated transaction logs.",
    loreDescription: "Laravel booking web app featuring user sessions, checkout print validations, and administrative statistics panels.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/UTS-Pemweb2",
    tech: ["laravel", "php", "mysql"]
  },
  {
    id: "5",
    title: "AUTOMATED INTERNET CAFE MANAGEMENT SUITE",
    category: "DevOps & Advanced Backend",
    description: "An advanced, optimized iteration of the internet cafe rental reservation platform. Enhances the Laravel architecture with automated installer scripts, automated database seeding, custom configuration modules, and comprehensive code architectural documentation.",
    loreDescription: "Advanced Laravel suite with installer automation, modular routes, and detailed codebase architecture maps.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/UAS_PrakPemWeb2",
    tech: ["laravel", "php", "mysql"]
  },
  {
    id: "6",
    title: "RURAL ASSET & INFRASTRUCTURE INVENTORY SYSTEM",
    category: "Cloud Web Application",
    description: "A secure administrative web dashboard for village infrastructure asset auditing and maintenance reporting. Built with Laravel 12 and deployed on Vercel, integrating a cloud PostgreSQL database hosted on Supabase and multi-role access control.",
    loreDescription: "Vercel-hosted Laravel application using remote Supabase SQL database instances and granular permission systems.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/UAS_pemweb2",
    tech: ["laravel", "supabase", "vercel"]
  },
  {
    id: "7",
    title: "SPASIKOMPUTER INTERFACE PROTOTYPE",
    category: "Frontend UI/UX Prototyping",
    description: "A responsive multi-page web prototype showcasing the UI flow for a workstation leasing service. Handcrafted using semantic HTML5 elements, custom CSS3 styles, and native JavaScript for responsive navbar and gallery rendering.",
    loreDescription: "Static prototype showcasing responsive flex layouts, responsive navbar triggers, and gallery overlays.",
    thumbnail: "",
    githubLink: "https://github.com/Mfkr07/test-02",
    tech: ["html", "css", "js"]
  }
];
