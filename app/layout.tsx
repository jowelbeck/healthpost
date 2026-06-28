import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  icons: {
    icon: [{ url: "/healthpost-icon.svg", type: "image/svg+xml" }],
    shortcut: "/healthpost-icon.svg",
    apple: "/healthpost-icon.svg",
  },
  title: "Healthpost — Hospital Operating System",
  description: "AI-powered hospital operating system for medical professionals across Africa and beyond.",
  openGraph: {
    title: "Healthpost — Hospital Operating System",
    description: "AI-powered clinical support, patient records and practice management for vets across Africa.",
    url: "https://healthpost.africa",
    siteName: "Healthpost",
    images: [
      {
        url: "https://healthpost.africa/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthpost — Hospital Operating System",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthpost — Hospital Operating System",
    description: "AI-powered hospital operating system for medical professionals across Africa.",
    images: ["https://healthpost.africa/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}