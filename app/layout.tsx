import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://envisiondigitalsolutions.com.au";
const siteName = "Envision Digital Solution";
const defaultTitle =
  "Digital Marketing, Websites and Location Strategy in Melbourne";
const siteDescription =
  "Envision Digital Solutions helps Melbourne and Australian businesses grow through digital marketing, websites, automation, and location strategy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${defaultTitle}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  keywords: [
    "digital marketing Melbourne",
    "website design Melbourne",
    "website development Melbourne",
    "SEO Melbourne",
    "local SEO Australia",
    "Google Ads management",
    "Meta Ads management",
    "paid ads Melbourne",
    "location strategy",
    "marketing automation",
    "conversion optimisation",
    "small business marketing Australia",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | ${defaultTitle}`,
    description: siteDescription,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${defaultTitle}`,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/branding/circle-blue.png", type: "image/png" },
    ],
    shortcut: ["/branding/circle-blue.png"],
    apple: [{ url: "/branding/circle-blue.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Envision Digital Solutions",
  alternateName: siteName,
  url: siteUrl,
  logo: `${siteUrl}/branding/envision-logo.png`,
  email: "hello@envisionds.com.au",
  description: siteDescription,
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "AdministrativeArea", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en-AU",
  publisher: {
    "@type": "Organization",
    name: "Envision Digital Solutions",
    url: siteUrl,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Envision Digital Solutions",
  url: siteUrl,
  image: `${siteUrl}/branding/envision-logo.png`,
  email: "hello@envisionds.com.au",
  description: siteDescription,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "AdministrativeArea", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
