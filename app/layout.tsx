import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jeff Gicharu | Full Stack Web Developer",
  description: "Full Stack Web Developer specializing in React, Next.js, and modern web technologies. View my portfolio to see my latest projects and experience.",
  keywords: [
    "Jeff Gicharu",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Jeff Gicharu" }],
  creator: "Jeff Gicharu",
  publisher: "Jeff Gicharu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeffgicharu.com',
    siteName: 'Jeff Gicharu - Full Stack Developer Portfolio',
    title: 'Jeff Gicharu | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, and modern web technologies. View my portfolio to see my latest projects and experience.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeff Gicharu - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Gicharu | Full Stack Web Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/images/og-image.jpg'],
    creator: '@jeffgicharu',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://jeffgicharu.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
