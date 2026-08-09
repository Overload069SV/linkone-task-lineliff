import { SITE } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * Structured data (schema.org JSON-LD) for richer search results:
 * Organization, WebSite, and the Linkone SoftwareApplication.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Linkone",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-blue.png`,
        email: SITE.email,
        description: SITE.positioningEn,
        slogan: SITE.tagline,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE.email,
          availableLanguage: ["Thai", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Linkone",
        description: SITE.positioningEn,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["th-TH", "en"],
      },
      {
        "@type": "SoftwareApplication",
        name: "Linkone",
        applicationCategory: "BusinessApplication",
        operatingSystem: "LINE, Web, iOS, Android",
        url: SITE_URL,
        description: SITE.positioningEn,
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "THB",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
