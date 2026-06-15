import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-default flex flex-col items-center text-center">
        <p className="text-6xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Nie znaleziono strony
        </h1>
        <p className="mt-4 max-w-md text-slate-600">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
          Sprawdź adres lub wróć na stronę główną.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            Strona główna
          </Link>
          <Link href="/uslugi" className="btn-secondary">
            Zobacz usługi
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
