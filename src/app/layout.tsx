import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const display = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Elizabeth — Author, Speaker, Founder",
  description: "Bestselling author, sought-after speaker, and founder.",
  themeColor: "#f3eee8",
  openGraph: {
    title: "Elizabeth — Author, Speaker, Founder",
    description: "Bestselling author, sought-after speaker, and founder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
