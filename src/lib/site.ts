export const siteConfig = {
  name: "Dach Mal Servis",
  legalName: "Dach Mal Servis",
  description:
    "Profesjonalne usługi dekarskie i remontowo-budowlane w Bydgoszczy. Mycie i malowanie dachów, remonty, obróbki blacharskie, rynny, elewacje i docieplenia. Członek Polskiego Stowarzyszenia Dekarzy.",
  url: "https://dachmalservis.pl",
  locale: "pl_PL",
  city: "Bydgoszcz",
  region: "kujawsko-pomorskie",
  nap: {
    name: "Dach Mal Servis",
    street: "Ciele, ul. Szczęśliwa 10",
    postalCode: "86-005",
    city: "Bydgoszcz",
    country: "Polska",
    phone: "+48 500 450 018",
    phoneHref: "tel:+48500450018",
    email: "dachmalservis@wp.pl",
    emailHref: "mailto:dachmalservis@wp.pl",
    contactPerson: "Wojciech Bąk",
  },
  openingHours: [
    { days: "Poniedziałek – Piątek", hours: "07:00 – 18:00" },
    { days: "Sobota", hours: "08:00 – 14:00" },
    { days: "Niedziela", hours: "Zamknięte" },
  ],
  areaServed: [
    "Bydgoszcz",
    "Osielsko",
    "Białe Błota",
    "Solec Kujawski",
    "Koronowo",
    "Nakło nad Notecią",
  ],
  social: {
    facebook: "https://facebook.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
