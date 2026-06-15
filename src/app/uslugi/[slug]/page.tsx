import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import {
  getServiceBySlug,
  getServicesByCategory,
  serviceCategories,
  serviceSlugs,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Nie znaleziono usługi",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/uslugi/${service.slug}`,
      type: "article",
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const category = serviceCategories.find((c) => c.id === service.category);
  const relatedServices = getServicesByCategory(service.category)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    provider: {
      "@type": "RoofingContractor",
      name: siteConfig.name,
      telephone: siteConfig.nap.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.nap.street,
        postalCode: siteConfig.nap.postalCode,
        addressLocality: siteConfig.nap.city,
        addressCountry: "PL",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <article>
        <header className="border-b border-slate-200 bg-slate-50">
          <div className="container-default py-14 sm:py-16">
            <nav
              aria-label="Ścieżka nawigacji"
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <Link href="/" className="transition hover:text-brand-600">
                Strona główna
              </Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link href="/uslugi" className="transition hover:text-brand-600">
                Usługi
              </Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium text-slate-700">{service.title}</span>
            </nav>

            <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
              {service.title} Bydgoszcz
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.nap.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Zadzwoń: {siteConfig.nap.phone}
              </a>
              <Link href="/#kontakt" className="btn-secondary">
                Zamów wycenę
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </header>

        <div className="section">
          <div className="container-default grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <section aria-labelledby="opis-heading">
                <h2 id="opis-heading" className="text-2xl font-bold">
                  Opis usługi
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                  {service.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section aria-labelledby="zakres-heading" className="mt-10">
                <h2 id="zakres-heading" className="text-2xl font-bold">
                  Zakres prac
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {relatedServices.length > 0 && (
                <section aria-labelledby="powiazane-heading" className="mt-10">
                  <h2 id="powiazane-heading" className="text-2xl font-bold">
                    Powiązane usługi
                  </h2>
                  <ul className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200">
                    {relatedServices.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/uslugi/${related.slug}`}
                          className="flex items-center justify-between gap-4 p-4 transition hover:bg-slate-50"
                        >
                          <span className="font-medium text-slate-800">
                            {related.title}
                          </span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-slate-400"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-slate-900 p-7 text-white">
                <h2 className="text-lg font-bold">Bezpłatna wycena</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Zadzwoń lub napisz — umówimy termin oględzin i przygotujemy wycenę bez zobowiązań.
                </p>
                <a
                  href={siteConfig.nap.phoneHref}
                  className="btn-primary mt-6 w-full justify-center"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.nap.phone}
                </a>
                <a
                  href={siteConfig.nap.emailHref}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  {siteConfig.nap.email}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
