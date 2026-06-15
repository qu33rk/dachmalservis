import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import {
  serviceCategories,
  getServicesByCategory,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Usługi dekarskie Bydgoszcz — pełna oferta",
  description:
    "Pełna oferta usług dekarskich i elewacyjnych w Bydgoszczy: mycie i malowanie dachów, remonty, obróbki blacharskie, rynny, elewacje i docieplenia.",
  alternates: { canonical: "/uslugi" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-default py-16 sm:py-20">
          <nav aria-label="Ścieżka nawigacji" className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition hover:text-brand-600">
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-700">Usługi</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Usługi dekarskie i elewacyjne w Bydgoszczy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Kompleksowo zajmujemy się dachami i elewacjami — od mycia i malowania,
            przez naprawy i remonty, po obróbki blacharskie oraz docieplenia
            budynków. Poniżej znajdziesz pełen zakres naszych usług.
          </p>
          <div className="mt-8">
            <a href={siteConfig.nap.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Zamów bezpłatną wycenę
            </a>
          </div>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const categoryServices = getServicesByCategory(category.id);
        return (
          <section
            key={category.id}
            className="section border-b border-slate-100 last:border-0"
            aria-labelledby={`category-${category.id}`}
          >
            <div className="container-default">
              <div className="max-w-2xl">
                <h2
                  id={`category-${category.id}`}
                  className="text-2xl font-bold sm:text-3xl"
                >
                  {category.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {category.description}
                </p>
              </div>
              <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section bg-slate-50">
        <div className="container-default">
          <div className="rounded-2xl bg-slate-900 px-8 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Nie wiesz, której usługi potrzebujesz?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate-300">
              Skontaktuj się z nami — doradzimy i przygotujemy bezpłatną wycenę bez zobowiązań.
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
