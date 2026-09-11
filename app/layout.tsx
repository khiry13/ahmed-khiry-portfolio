import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmed - Full Stack Developer & Odoo Specialist",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and Odoo ERP customization. Available for remote and freelance opportunities.",
  keywords: [
    "Full Stack Developer",
    "Odoo Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Laravel",
    "PHP",
    "PostgreSQL",
  ],
  authors: [{ name: "Ahmed" }],
  openGraph: {
    title: "Ahmed - Full Stack Developer & Odoo Specialist",
    description:
      "Full Stack Developer specializing in React, Next.js, and Odoo ERP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
