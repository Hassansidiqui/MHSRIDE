import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MHSRIDE | Premium Taxi & Ride-Sharing Service",
  description: "Experience the ultimate comfort and reliability with MHSRIDE. Professional drivers, luxury vehicles, and 24/7 support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
