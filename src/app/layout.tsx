import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  keywords: "gold jewellery Delhi, silver jewellery Okhla, diamond jewellery Batla House, bridal sets Delhi, Anas Jewellers, Gold99, hallmarked gold, Turkish gold designs, Italian gold, jewellery showroom Delhi",
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
  },
  robots: { index: true, follow: true },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: siteConfig.name,
  description: siteConfig.seoDescription,
  url: siteConfig.instagram,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.area,
    addressRegion: "Delhi",
    postalCode: siteConfig.pincode,
    addressCountry: "IN",
  },
  foundingDate: String(siteConfig.since),
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
