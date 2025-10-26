import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roger Richard Demello - Software Developer Portfolio",
  description: "Aspiring Software Developer | C++ Enthusiast | ML Aspirant | AWS Cloud Practitioner - Portfolio showcasing AI/ML projects, cloud computing skills, and software development experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}
