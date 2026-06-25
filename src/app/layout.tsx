import type { Metadata } from "next";
import { Cinzel_Decorative, Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mfkr.DEV — M. Fakhri Asshofi | Full Stack Developer",
  description: "Professional portfolio of M. Fakhri Asshofi (mfkr.DEV), a Full Stack Developer specializing in React, Next.js, and Laravel. View projects, technical skills, and contact details.",
  metadataBase: new URL("https://mfkr.dev"),
  openGraph: {
    title: "mfkr.DEV — M. Fakhri Asshofi | Full Stack Developer",
    description: "Professional portfolio of M. Fakhri Asshofi (mfkr.DEV), a Full Stack Developer specializing in React, Next.js, and Laravel.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-deep-void text-smoke-white font-sans selection:bg-old-gold selection:text-deep-void min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
