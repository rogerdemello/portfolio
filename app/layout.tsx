import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roger Richard Demello — ML Engineer & Cloud Specialist",
  description: "Machine Learning Engineer & AWS Cloud Practitioner. Portfolio of AI/ML projects, cloud deployment, and software development — Python, TensorFlow, AWS.",
  keywords: [
    "Roger Demello",
    "Machine Learning Engineer",
    "ML Engineer",
    "AWS Cloud",
    "AI/ML",
    "Python",
    "TensorFlow",
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
    title: "Roger Richard Demello — ML Engineer & Cloud Specialist",
    description: "Machine Learning Engineer & AWS Cloud Practitioner. AI/ML projects, cloud deployment, Python, TensorFlow.",
    siteName: "Roger Demello Portfolio",
    images: [
      {
        url: "https://rogerdemello.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roger Richard Demello — ML Engineer & Cloud Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Richard Demello — ML Engineer & Cloud Specialist",
    description: "Machine Learning Engineer & AWS Cloud Practitioner. AI/ML projects, Python, TensorFlow, AWS.",
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
      <body className="bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
