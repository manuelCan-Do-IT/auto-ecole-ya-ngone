import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-url";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Auto école Ya Ngoné | Permis B, C et D à Ouakam",
    template: "%s | Auto école Ya Ngoné",
  },
  description: "Découvrez les formations, tarifs et pièces d’inscription de l’Auto école Ya Ngoné à Cité Avion, Ouakam — Dakar.",
  keywords: ["auto-école Ouakam", "permis de conduire Dakar", "permis B Sénégal", "permis C Sénégal", "permis D Sénégal"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: "Auto école Ya Ngoné",
    title: "Auto école Ya Ngoné | Permis B, C et D à Ouakam",
    description: "Formations, tarifs, dossier d’inscription et conseils pratiques pour préparer votre permis à Ouakam, Dakar.",
    images: [{ url: "/images/hero-driving.png", width: 1200, height: 630, alt: "Leçon de conduite à Auto école Ya Ngoné" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto école Ya Ngoné",
    description: "Préparez les permis B, C et D à Ouakam, Dakar.",
    images: ["/images/hero-driving.png"],
  },
  other: { "codex-preview": "development" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Auto école Ya Ngoné",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/png/logo-symbole-transparent-512.png`,
    image: `${siteUrl}/images/hero-driving.png`,
    telephone: ["+221775461718", "+221777003816"],
    email: "yangonendiaye85@yahoo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cité Avion, Ouakam",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    areaServed: ["Ouakam", "Dakar"],
  };

  return (
    <html lang="fr">
      <body className={`${barlow.variable} ${barlowSemiCondensed.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
