import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "DoseGennie | AI-Powered Math Education for Nurses",
  description: "Master dosage calculations and clinical math with confidence using the advanced DoseGennie platform.",
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
        <Script
          id="tidio-chat"
          src="//code.tidio.co/sfgstdi2vh5glwbqn0xcwkgholi75ixn.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
