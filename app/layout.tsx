import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-thai",
  display: "swap",
});

import { DICT } from "@/lib/content";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://linkonecompany.com";
const TITLE = DICT.th.meta.title;
const DESCRIPTION = DICT.th.meta.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Linkone",
  category: "business",
  keywords: [
    "Linkone",
    "จัดการงาน",
    "จัดการโปรเจกต์",
    "LINE",
    "task management",
    "project management",
    "collaboration platform",
    "ระบบจัดการทีม",
  ],
  authors: [{ name: "Linkone" }],
  creator: "Linkone",
  publisher: "Linkone",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: {
    canonical: "/",
    languages: { th: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Linkone",
    title: DICT.th.meta.ogTitle,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DICT.th.meta.ogTitle,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0057D9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${inter.variable} ${plexThai.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
