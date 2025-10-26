import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roger Richard Demello - Software Developer Portfolio",
  description: "Aspiring Software Developer | C++ Enthusiast | ML Aspirant | AWS Cloud Practitioner - Portfolio showcasing AI/ML projects, cloud computing skills, and software development experience",
  keywords: [
    "Roger Demello",
    "Software Developer",
    "C++ Developer",
    "Machine Learning",
    "AWS Cloud",
    "Full Stack Developer",
    "Python Developer",
    "Java Developer",
    "AI/ML Engineer",
    "Cloud Computing",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Roger Richard Demello" }],
  creator: "Roger Richard Demello",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rogerdemello.vercel.app/",
    title: "Roger Richard Demello - Software Developer Portfolio",
    description: "Aspiring Software Developer specializing in C++, Machine Learning, and AWS Cloud Computing. Explore my projects, skills, and experience.",
    siteName: "Roger Demello Portfolio",
    images: [
      {
        url: "https://rogerdemello.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roger Richard Demello - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Richard Demello - Software Developer Portfolio",
    description: "Aspiring Software Developer | C++ Enthusiast | ML Aspirant | AWS Cloud Practitioner",
    images: ["https://rogerdemello.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
