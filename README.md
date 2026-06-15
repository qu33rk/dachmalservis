# Dachmalservis.pl

Strona lokalnej firmy dekarskiej z Bydgoszczy. Zbudowana w Next.js (App Router),
TypeScript, Tailwind CSS oraz Lucide React, z naciskiem na lokalne SEO.

## Stack

- **Next.js 14** (App Router, statyczne renderowanie)
- **TypeScript**
- **Tailwind CSS** (mobile-first)
- **Lucide React** (ikony)

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

## Skrypty

- `npm run dev` — serwer deweloperski
- `npm run build` — build produkcyjny
- `npm run start` — uruchomienie buildu
- `npm run lint` — ESLint
- `npm run typecheck` — sprawdzenie typów TypeScript

## Struktura

```
src/
  app/
    layout.tsx            # Layout główny + metadane SEO
    page.tsx              # Strona główna (hero, o nas, usługi, kontakt)
    not-found.tsx         # Strona 404
    robots.ts             # robots.txt
    sitemap.ts            # sitemap.xml
    uslugi/
      page.tsx            # Lista wszystkich usług
      [slug]/page.tsx     # Podstrona pojedynczej usługi (SEO)
  components/             # Header, Footer, HeroSection, ServiceCard, ContactForm, JsonLd
  lib/
    services.ts           # Dane usług + kategorie
    site.ts               # Konfiguracja firmy (NAP, godziny, obszar)
```

## SEO

- Dynamiczne `metadata` (Metadata API) na każdej stronie.
- Semantyczny HTML5 i poprawna hierarchia nagłówków (jeden `H1` na stronę).
- JSON-LD `RoofingContractor` (LocalBusiness) na stronie głównej + `Service` na podstronach.
- `sitemap.xml` oraz `robots.txt` generowane dynamicznie.

## Konfiguracja danych firmy

Dane kontaktowe (NAP), godziny otwarcia i obszar działania znajdują się w
`src/lib/site.ts`. Zaktualizuj je rzeczywistymi danymi przed publikacją.
Formularz kontaktowy jest obecnie tylko warstwą UI — należy podłączyć backend
lub serwis mailowy.
