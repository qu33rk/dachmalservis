import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/DACHMAL/w3f4.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-slate-900/70"
        aria-hidden="true"
      />
      <div className="container-default relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dach Mal Servis — firma dekarska w Bydgoszczy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Dach Mal Servis to lokalna firma dekarska. Zajmujemy się myciem i
            malowaniem dachów, naprawami pokryć, obróbkami blacharskimi,
            rynnami, elewacjami oraz dociepleniami budynków.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.nap.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Zadzwoń: {siteConfig.nap.phone}
            </a>
            <Link
              href="/uslugi"
              className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Zobacz usługi
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
