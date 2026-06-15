import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Realizacje — Dach Mal Servis Bydgoszcz",
  description:
    "Galeria zdjęć z realizacji firmy Dach Mal Servis. Mycie i malowanie dachów, remonty, elewacje i docieplenia w Bydgoszczy i okolicach.",
  alternates: { canonical: "/realizacje" },
};

const projects = [
  {
    id: "w1",
    title: "Mycie i malowanie dachu — dom jednorodzinny",
    category: "Mycie i malowanie dachów",
    photos: [
      "/DACHMAL/w1f1.jpg",
      "/DACHMAL/w1f2.jpg",
      "/DACHMAL/w1f3.jpg",
      "/DACHMAL/w1f4.jpg",
    ],
  },
  {
    id: "w2",
    title: "Malowanie dachu trapezowego — obiekt przemysłowy",
    category: "Malowanie dachów blaszanych",
    photos: [
      "/DACHMAL/w2f1.jpg",
      "/DACHMAL/w2f2.jpg",
      "/DACHMAL/w2f3.jpg",
      "/DACHMAL/w2f4.jpg",
    ],
  },
  {
    id: "w3",
    title: "Mycie dachówki ceramicznej — dom jednorodzinny",
    category: "Mycie i malowanie dachów",
    photos: [
      "/DACHMAL/w3f1.jpg",
      "/DACHMAL/w3f2.jpg",
      "/DACHMAL/w3f3.jpg",
      "/DACHMAL/w3f4.jpg",
    ],
  },
  {
    id: "w4",
    title: "Malowanie dachu — hala przemysłowa",
    category: "Malowanie dachów blaszanych",
    photos: [
      "/DACHMAL/w4f1.jpg",
      "/DACHMAL/w4f2.jpg",
      "/DACHMAL/w4f3.jpg",
      "/DACHMAL/w4f4.jpg",
    ],
  },
  {
    id: "w5",
    title: "Malowanie blachy trapezowej — dom jednorodzinny",
    category: "Mycie i malowanie dachów",
    photos: [
      "/DACHMAL/w5f1.jpg",
      "/DACHMAL/w5f2.jpg",
      "/DACHMAL/w5f3.jpg",
      "/DACHMAL/w5f4.jpg",
    ],
  },
  {
    id: "w6",
    title: "Malowanie dachu — obiekt handlowy",
    category: "Malowanie dachów blaszanych",
    photos: [
      "/DACHMAL/w6f1.jpg",
      "/DACHMAL/w6f2.jpg",
      "/DACHMAL/w6f3.jpg",
      "/DACHMAL/w6f4.jpg",
    ],
  },
  {
    id: "w7",
    title: "Malowanie gontów bitumicznych — dom jednorodzinny",
    category: "Mycie i malowanie dachów",
    photos: [
      "/DACHMAL/w7f1.jpg",
      "/DACHMAL/w7f2.jpg",
      "/DACHMAL/w7f3.jpg",
      "/DACHMAL/w7f4.jpg",
    ],
  },
];

export default function RealizacjePage() {
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
              <li className="font-medium text-slate-700">Realizacje</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Realizacje</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Poniżej znajdziesz zdjęcia z wybranych realizacji — dachów, elewacji
            i innych prac wykonanych przez nasz zespół w Bydgoszczy i okolicach.
          </p>
        </div>
      </section>

      <div className="container-default py-16">
        <div className="flex flex-col divide-y divide-slate-100">
          {projects.map((project, idx) => (
            <article key={project.id} className="py-12 first:pt-0">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="text-xs font-semibold tabular-nums text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {project.category}
                  </span>
                  <h2 className="mt-0.5 text-lg font-bold text-slate-900">
                    {project.title}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {project.photos.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-lg bg-slate-100"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — zdjęcie ${i + 1}`}
                      fill
                      className="object-cover transition duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Zainteresowany podobną realizacją?
          </h2>
          <p className="mt-3 text-slate-300">
            Skontaktuj się z nami — bezpłatna wycena bez zobowiązań.
          </p>
          <a
            href={siteConfig.nap.phoneHref}
            className="btn-primary mt-8 inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Zadzwoń: {siteConfig.nap.phone}
          </a>
        </div>
      </div>
    </>
  );
}
