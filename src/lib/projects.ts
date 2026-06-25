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
    title: "E-COMMERCE PLATFORM",
    category: "Full Stack Development",
    description: "A high-performance e-commerce platform built with Next.js and Laravel, featuring real-time inventory synchronization, Stripe payment integration, and secure user authentication.",
    loreDescription: "A high-performance e-commerce platform built with Next.js and Laravel, featuring real-time inventory synchronization, Stripe payment integration, and secure user authentication.",
    thumbnail: "/images/project-1.jpg",
    githubLink: "#",
    tech: ["nextjs", "laravel", "react", "mysql"]
  },
  {
    id: "2",
    title: "REAL-TIME DASHBOARD",
    category: "Data Analytics & Visualization",
    description: "An interactive analytics dashboard displaying server logs, user activity metrics, and transactional APIs, leveraging Next.js, Chart.js, and Supabase database services.",
    loreDescription: "An interactive analytics dashboard displaying server logs, user activity metrics, and transactional APIs, leveraging Next.js, Chart.js, and Supabase database services.",
    thumbnail: "/images/project-2.jpg",
    githubLink: "#",
    tech: ["react", "supabase", "nextjs"]
  },
  {
    id: "3",
    title: "SECURE DATA VAULT",
    category: "Cloud Cryptography",
    description: "A secure cloud storage and credential manager employing client-side encryption algorithms, granular access control, detailed activity logging, and multi-factor authentication.",
    loreDescription: "A secure cloud storage and credential manager employing client-side encryption algorithms, granular access control, detailed activity logging, and multi-factor authentication.",
    thumbnail: "/images/project-3.jpg",
    githubLink: "#",
    tech: ["ts", "react", "sqlite"]
  },
  {
    id: "4",
    title: "AUTOMATED TESTING RUNNER",
    category: "DevOps & QA",
    description: "An automated integration testing tool executing load-testing cycles, webhook validations, and continuous delivery pipeline health checks for modern microservices.",
    loreDescription: "An automated integration testing tool executing load-testing cycles, webhook validations, and continuous delivery pipeline health checks for modern microservices.",
    thumbnail: "/images/project-4.jpg",
    githubLink: "#",
    tech: ["python", "cpp", "vercel"]
  }
];
