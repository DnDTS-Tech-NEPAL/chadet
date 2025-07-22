import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/toaster";
import { Layout } from "@/components/layout/Layout";
import { Provider } from "./provider";



// Load Geist Sans with a CSS variable
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page-level metadata used by Next.js to generate <head> content
export const metadata: Metadata = {
  title: "Chadet",
  description:
    "Chadet is a cosmetics ecommerce platform that offers a wide range of cosmetics products.", // SEO description
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// Root layout wrapper for the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className}  antialiased`}
      >
        {/* Chakra UI and any app-wide context providers */}
        <Provider>
          <Layout>
          {/* page content renders here */}
          {children}
           </Layout>
          {/* Global toaster for notifications */}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
