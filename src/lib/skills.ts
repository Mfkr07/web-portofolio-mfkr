export interface Skill {
  name: string;
  enchantment: 0 | 1 | 2 | 3; // 0 = standard, 1 = .1, 2 = .2, 3 = .3
  iconName: string;
}

export const skills: Skill[] = [
  { name: "TS", enchantment: 2, iconName: "ts" },
  { name: "php", enchantment: 2, iconName: "php" },
  { name: "JS", enchantment: 2, iconName: "js" },
  { name: "Laravel", enchantment: 2, iconName: "laravel" },
  { name: "React", enchantment: 2, iconName: "react" },
  { name: "Flutter", enchantment: 2, iconName: "flutter" },
  { name: "Python", enchantment: 2, iconName: "python" },
  { name: "C++", enchantment: 2, iconName: "cpp" },
  { name: "Next.js", enchantment: 2, iconName: "nextjs" },
  { name: "Supabase", enchantment: 2, iconName: "supabase" },
  { name: "Firebase", enchantment: 2, iconName: "firebase" },
  { name: "MySQL", enchantment: 2, iconName: "mysql" },
  { name: "SQLite", enchantment: 2, iconName: "sqlite" },
  { name: "Vercel", enchantment: 2, iconName: "vercel" },
  { name: "CSS", enchantment: 2, iconName: "css" },
  { name: "HTML", enchantment: 2, iconName: "html" }
];
