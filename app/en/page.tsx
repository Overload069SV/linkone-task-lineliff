import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { DICT } from "@/lib/content";

const meta = DICT.en.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: "/en",
    languages: { th: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkonecompany.com/en",
    siteName: "Linkone",
    title: meta.ogTitle,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.description,
  },
};

export default function EnHome() {
  return <LandingPage lang="en" />;
}
