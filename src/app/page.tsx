import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { services, serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usługi dekarskie Bydgoszcz — mycie i malowanie dachów",
  description:
    "Dachmalservis.pl — lokalna firma dekarska w Bydgoszczy. Mycie i malowanie dachów, remonty, obróbki blacharskie, rynny, elewacje i docieplenia. Bezpłatna wycena.",
  alternates: { canonical: "/" },
};

const advantages = [
  {
    title: "Ponad 10 lat doświadczenia",
    description:
      "Doświadczenie zdobyte w Niemczech i Anglii (10 lat za granicą) oraz w kraju od 2010 r. gwarantuje najwyższą jakość prac.",
  },
  {
    title: "Ubezpieczenie OC 1 500 000 zł",
    description:
      "Posiadamy polisę OC na kwotę 1 500 000 zł oraz należymy do Polskiego Stowarzyszenia Dekarzy (PSD).",
  },
  {
    title: "Własny sprzęt i rusztowania",
    description:
      "Dysponujemy rusztowaniami elewacyjnymi Plettac (500 m²) oraz podnośnikiem koszowym do 12 m wysokości.",
  },
  {
    title: "Stały nadzór i doradztwo",
    description:
      "Zapewniamy nadzór nad każdą inwestycją, doradzamy i dbamy o terminową realizację zleceń.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HeroSection />

      <section id="o-nas" className="section" aria-labelledby="about-heading">
        <div className="container-default grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold sm:text-4xl"
            >
              Firma remontowo-budowlana z Bydgoszczy
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Dach Mal Servis to firma z wieloletnim doświadczeniem zdobytym
              zarówno za granicą (Niemcy, Anglia — 10 lat), jak i w Polsce od
              2010 roku. Specjalizujemy się w kompleksowych pracach dekarskich
              i elewacyjnych, dysponując wykwalifikowaną kadrą pracowniczą.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Posiadamy własne rusztowania elewacyjne Plettac (500 m²) oraz
              podnośnik koszowy do 12 m. Jesteśmy członkiem{" "}
              <strong className="text-slate-800">
                Polskiego Stowarzyszenia Dekarzy (PSD)
              </strong>{" "}
              i posiadamy ubezpieczenie OC na kwotę{" "}
              <strong className="text-slate-800">1 500 000 zł</strong>.
              W trosce o jakość stale uczestniczymy w branżowych kursach i
              szkoleniach.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/uslugi" className="btn-primary">
                Poznaj nasze usługi
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="#kontakt" className="btn-secondary">
                Skontaktuj się
              </Link>
            </div>
          </div>

          <ul className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {advantages.map((item, idx) => (
              <li
                key={item.title}
                className="group relative overflow-hidden bg-white p-8 transition hover:bg-slate-50"
              >
                <span
                  className="absolute bottom-0 right-3 translate-y-1/4 select-none text-8xl font-bold leading-none text-slate-100 transition group-hover:text-brand-100"
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="relative text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section bg-slate-50"
        aria-labelledby="services-heading"
      >
        <div className="container-default">
          <h2
            id="services-heading"
            className="text-3xl font-bold sm:text-4xl"
          >
            Nasze usługi
          </h2>

          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            {serviceCategories.map((cat) => {
              const catServices = services.filter((s) => s.category === cat.id);
              return (
                <div key={cat.id}>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {cat.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {catServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/uslugi/${service.slug}`}
                          className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-100 transition hover:ring-brand-500 hover:shadow-md"
                        >
                          <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-600">
                            {service.title}
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-500" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/uslugi" className="btn-secondary">
              Zobacz wszystkie usługi
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section bg-slate-50" aria-labelledby="contact-heading">
        <div className="container-default">
          <div className="rounded-2xl bg-slate-900 px-8 py-14 text-center sm:px-16">
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Zamów bezpłatną wycenę
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
              Działamy w Bydgoszczy i okolicach. Zadzwoń — umówimy termin
              oględzin i przygotujemy wycenę bez zobowiązań.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={siteConfig.nap.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.nap.phone}
              </a>
              <a
                href={siteConfig.nap.emailHref}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
              >
                {siteConfig.nap.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
