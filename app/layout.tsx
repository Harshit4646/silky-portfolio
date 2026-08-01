import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "./data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description:
    `Portfolio website for ${profile.name}, featuring education, research, clinical nutrition experience, publications, and professional achievements.`,
  keywords: [
    "Dr. Silky Sharma",
    "clinical dietitian",
    "nutrition researcher",
    "food science",
    "portfolio",
  ],
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: `Explore the professional profile of ${profile.name}, from academic training to clinical nutrition practice.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
