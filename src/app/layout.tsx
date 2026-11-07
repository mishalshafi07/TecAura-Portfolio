import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CinematicIntro } from "@/components/intro/CinematicIntro";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { COMPANY_INFO } from "@/data/company";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030509",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tecaura.io"
  ),
  title: {
    default: "TecAura — Innovating Today. Engineering Tomorrow.",
    template: "%s | TecAura Software & Digital Technology",
  },
  description:
    "TecAura is an international software development and digital technology company transforming ambitious business ideas into custom software, web & mobile applications, AI/ML solutions, and workflow automation.",
  keywords: [
    "TecAura",
    "Software Development Company",
    "Custom Software Engineering",
    "Web Development Next.js",
    "Artificial Intelligence & Machine Learning",
    "UI/UX Design Studio",
    "Business Process Automation",
    "Cloud Solutions & Cybersecurity",
  ],
  authors: [{ name: "TecAura" }],
  creator: "TecAura",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TecAura",
    title: "TecAura — Innovating Today. Engineering Tomorrow.",
    description:
      "We transform ambitious ideas into powerful digital products through software engineering, intelligent technology and creative innovation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecAura — Software & Digital Technology",
    description:
      "We build digital experiences that move businesses forward. Custom software, Web, Mobile, AI/ML, UI/UX, and Automation.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    slogan: COMPANY_INFO.tagline,
    description: COMPANY_INFO.positioning,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tecaura.io",
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    areaServed: ["IN", "Global"],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-[100dvh] w-full flex flex-col bg-[#030509] text-[#F5F5FA] antialiased overflow-x-hidden selection:bg-[#21B8E8]/35">
        <CustomCursor />
        <CinematicIntro />
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
