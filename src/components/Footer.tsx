import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

const pages = [
  { href: "/", label: "Strona główna" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/#o-nas", label: "O nas" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { nap } = siteConfig;

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-default py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Dach Mal Servis
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Profesjonalne usługi dekarskie i remontowo-budowlane w Bydgoszczy.
              Doświadczenie od 2010 r., członek PSD, ubezpieczenie OC 1 500 000 zł.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Strony
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-slate-400 transition hover:text-brand-400"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Kontakt
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  {nap.name}
                  <br />
                  {nap.street}
                  <br />
                  {nap.postalCode} {nap.city}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  <span className="block text-slate-400">{nap.contactPerson}</span>
                  <a href={nap.phoneHref} className="transition hover:text-brand-400">
                    {nap.phone}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <a href={nap.emailHref} className="transition hover:text-brand-400">
                  {nap.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <span>
              Developed by:{" "}
              <a
                href="https://www.linkedin.com/in/eryk-witkowski/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-300"
              >
                Eryk Witkowski
              </a>
            </span>
            <Link
              href="/polityka-prywatnosci"
              className="transition hover:text-slate-300"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
