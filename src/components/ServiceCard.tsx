import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col border-l-2 border-slate-200 pl-5 transition-colors hover:border-brand-600">
      <h3 className="text-base font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {service.shortDescription}
      </p>
      <Link
        href={`/uslugi/${service.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition group-hover:gap-2"
      >
        Więcej
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
