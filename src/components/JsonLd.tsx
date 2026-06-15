import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export function LocalBusinessJsonLd() {
  const { nap, url, openingHours, areaServed } = siteConfig;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url,
    telephone: nap.phone,
    email: nap.email,
    image: `${url}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      postalCode: nap.postalCode,
      addressLocality: nap.city,
      addressRegion: siteConfig.region,
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.1235,
      longitude: 18.0084,
    },
    areaServed: areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi dekarskie i elewacyjne",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${url}/uslugi/${service.slug}`,
        },
      })),
    },
  };

  // Mark openingHours as referenced for completeness of NAP data.
  void openingHours;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
