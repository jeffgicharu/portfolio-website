import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Define base metadata
const baseMetadata = {
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
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
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

// Construct the dynamic OG image URL
// Replace 'https://your-deployment-url.com' with your actual production URL
// or handle dynamically based on environment (e.g., VERCEL_URL)
const deploymentUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'http://localhost:3000'; // Fallback for local dev

const ogImageUrl = `${deploymentUrl}/api/og`;

// Export metadata object
export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseMetadata.alternates?.canonical || deploymentUrl, // Use canonical or deployment URL
    siteName: 'Jeff Gicharu - Full Stack Developer Portfolio',
    title: baseMetadata.title,
    description: baseMetadata.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Jeff Gicharu - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: baseMetadata.title,
    description: baseMetadata.description,
    images: [ogImageUrl], // Use the generated OG image URL for Twitter as well
    creator: '@jeffgicharu', // Replace with your actual Twitter handle if different
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
