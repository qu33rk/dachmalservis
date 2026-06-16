"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

// Wszystkie zdjęcia realizacji z folderu DACHMAL
const photos = [
  "/DACHMAL/1.jpg",
  "/DACHMAL/1 (1).jpg",
  "/DACHMAL/1 (2).jpg",
  "/DACHMAL/1 (3).jpg",
  "/DACHMAL/1 (4).jpg",
  "/DACHMAL/1 (5).jpg",
  "/DACHMAL/1 (6).jpg",
  "/DACHMAL/2.jpg",
  "/DACHMAL/2 (1).jpg",
  "/DACHMAL/2 (2).jpg",
  "/DACHMAL/2 (3).jpg",
  "/DACHMAL/2 (4).jpg",
  "/DACHMAL/2 (5).jpg",
  "/DACHMAL/2 (6).jpg",
  "/DACHMAL/3.jpg",
  "/DACHMAL/3 (1).jpg",
  "/DACHMAL/3 (2).jpg",
  "/DACHMAL/3 (3).jpg",
  "/DACHMAL/3 (4).jpg",
  "/DACHMAL/3 (5).jpg",
  "/DACHMAL/3 (6).jpg",
  "/DACHMAL/4.jpg",
  "/DACHMAL/4 (1).jpg",
  "/DACHMAL/4 (2).jpg",
  "/DACHMAL/4 (3).jpg",
  "/DACHMAL/4 (4).jpg",
  "/DACHMAL/4 (5).jpg",
  "/DACHMAL/4 (6).jpg",
  "/DACHMAL/5.jpg",
  "/DACHMAL/6.jpg",
  "/DACHMAL/7.jpg",
  "/DACHMAL/8.jpg",
  "/DACHMAL/a1.jpg",
  "/DACHMAL/a2.jpg",
  "/DACHMAL/a3.jpg",
  "/DACHMAL/a4.jpg",
  "/DACHMAL/b1.jpg",
  "/DACHMAL/b2.jpg",
  "/DACHMAL/b3.jpg",
  "/DACHMAL/b4.jpg",
  "/DACHMAL/ekrany.jpg",
  "/DACHMAL/ral.jpg",
  "/DACHMAL/traktor.jpg",
  "/DACHMAL/Screenshot_20201102-174549_Gallery.jpg",
  "/DACHMAL/Screenshot_20201102-174605_Gallery.jpg",
  "/DACHMAL/Screenshot_20201102-174638_Gallery.jpg",
  "/DACHMAL/Screenshot_20201102-174701_Gallery.jpg",
  "/DACHMAL/2015-09_1_1.jpg",
  "/DACHMAL/2015-09_1_2.jpg",
  "/DACHMAL/2015-09_2_1.jpg",
  "/DACHMAL/2015-09_2_2.jpg",
  "/DACHMAL/2015-09_2_3.jpg",
  "/DACHMAL/2015-09_2_4.jpg",
  "/DACHMAL/2015-09_3_1.jpg",
  "/DACHMAL/2015-09_3_2.jpg",
  "/DACHMAL/2015-09_3_3.jpg",
  "/DACHMAL/2015-09_3_4_temp.jpg",
  "/DACHMAL/2015-09_4_1.jpg",
  "/DACHMAL/2015-09_4_2.jpg",
  "/DACHMAL/2015-09_4_3.jpg",
  "/DACHMAL/2015-09_4_4.jpg",
  "/DACHMAL/2015-09_5_1.jpg",
  "/DACHMAL/2015-09_5_2.jpg",
  "/DACHMAL/2015-09_6_1.jpg",
  "/DACHMAL/2015-09_6_2.jpg",
  "/DACHMAL/2015-09_7_1.jpg",
  "/DACHMAL/2015-09_7_2.jpg",
  "/DACHMAL/2015-09_7_3.jpg",
  "/DACHMAL/2015-09_7_4.jpg",
  "/DACHMAL/2015-09_8_1.jpg",
  "/DACHMAL/2015-09_8_2.jpg",
  "/DACHMAL/2015-09_8_3.jpg",
  "/DACHMAL/20150317_131805.jpg",
  "/DACHMAL/20150317_132253.jpg",
  "/DACHMAL/20150321_145303.jpg",
  "/DACHMAL/20150326_122152.jpg",
  "/DACHMAL/20150403_084452.jpg",
  "/DACHMAL/20150422_121149.jpg",
  "/DACHMAL/20150422_121248.jpg",
  "/DACHMAL/20150422_183751.jpg",
  "/DACHMAL/20150423_141134.jpg",
  "/DACHMAL/20150427_130937.jpg",
  "/DACHMAL/20150429_120750.jpg",
  "/DACHMAL/20150508_092815.jpg",
  "/DACHMAL/20150508_131538.jpg",
  "/DACHMAL/20150512_132107.jpg",
  "/DACHMAL/20150512_132314.jpg",
  "/DACHMAL/DSC03871.jpg",
  "/DACHMAL/DSC04018.jpg",
  "/DACHMAL/DSC04021.jpg",
  "/DACHMAL/DSC04023.jpg",
  "/DACHMAL/DSC04027.jpg",
  "/DACHMAL/DSC04058.jpg",
  "/DACHMAL/DSC04478.jpg",
  "/DACHMAL/DSC04479.jpg",
  "/DACHMAL/DSC04542.jpg",
  "/DACHMAL/DSC04558.jpg",
  "/DACHMAL/DSC04565.jpg",
  "/DACHMAL/DSC04602.jpg",
  "/DACHMAL/DSC04603.jpg",
  "/DACHMAL/DSC04607.jpg",
  "/DACHMAL/DSC04617.jpg",
  "/DACHMAL/DSC04659.jpg",
  "/DACHMAL/DSC04663.jpg",
  "/DACHMAL/DSC04675_2.jpg",
  "/DACHMAL/DSC_0072.jpg",
  "/DACHMAL/DSC_0277.jpg",
  "/DACHMAL/DSC_0282.jpg",
  "/DACHMAL/DSC_0284.jpg",
  "/DACHMAL/w1f1.jpg",
  "/DACHMAL/w1f2.jpg",
  "/DACHMAL/w1f3.jpg",
  "/DACHMAL/w1f4.jpg",
  "/DACHMAL/w2f1.jpg",
  "/DACHMAL/w2f2.jpg",
  "/DACHMAL/w2f3.jpg",
  "/DACHMAL/w2f4.jpg",
  "/DACHMAL/w3f1.jpg",
  "/DACHMAL/w3f1 (1).jpg",
  "/DACHMAL/w3f2.jpg",
  "/DACHMAL/w3f2 (1).jpg",
  "/DACHMAL/w3f3.jpg",
  "/DACHMAL/w3f3 (1).jpg",
  "/DACHMAL/w3f4.jpg",
  "/DACHMAL/w3f4 (1).jpg",
  "/DACHMAL/w4f1.jpg",
  "/DACHMAL/w4f1 (1).jpg",
  "/DACHMAL/w4f2.jpg",
  "/DACHMAL/w4f2 (1).jpg",
  "/DACHMAL/w4f3.jpg",
  "/DACHMAL/w4f3 (1).jpg",
  "/DACHMAL/w4f4.jpg",
  "/DACHMAL/w4f4 (1).jpg",
  "/DACHMAL/w5f1.jpg",
  "/DACHMAL/w5f1 (1).jpg",
  "/DACHMAL/w5f2.jpg",
  "/DACHMAL/w5f2 (1).jpg",
  "/DACHMAL/w5f3.jpg",
  "/DACHMAL/w5f3 (1).jpg",
  "/DACHMAL/w5f4.jpg",
  "/DACHMAL/w5f4 (1).jpg",
  "/DACHMAL/w6f1.jpg",
  "/DACHMAL/w6f1 (1).jpg",
  "/DACHMAL/w6f2.jpg",
  "/DACHMAL/w6f2 (1).jpg",
  "/DACHMAL/w6f3.jpg",
  "/DACHMAL/w6f3 (1).jpg",
  "/DACHMAL/w6f4.jpg",
  "/DACHMAL/w7f1.jpg",
  "/DACHMAL/w7f2.jpg",
  "/DACHMAL/w7f3.jpg",
  "/DACHMAL/w7f4.jpg",
];

export default function RealizacjePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((src, i) => (
            <figure
              key={src}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-100"
              onClick={() => openLightbox(src)}
            >
              <div className="relative aspect-square">
                <Image
                  src={src}
                  alt="Realizacja"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={selectedImage}
              alt="Realizacja - powiększenie"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
