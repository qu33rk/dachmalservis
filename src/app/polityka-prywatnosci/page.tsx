import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności — Dach Mal Servis",
  description:
    "Polityka prywatności firmy Dach Mal Servis. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosci() {
  const { nap } = siteConfig;

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
              <li className="font-medium text-slate-700">Polityka prywatności</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Polityka prywatności
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Ostatnia aktualizacja: czerwiec 2025
          </p>
        </div>
      </section>

      <div className="container-default py-16">
        <div className="max-w-3xl space-y-10 text-slate-700">

          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Administrator danych osobowych</h2>
            <p className="mt-3 leading-relaxed">
              Administratorem Twoich danych osobowych jest{" "}
              <strong className="text-slate-900">{nap.name}</strong>, z siedzibą
              pod adresem: {nap.street}, {nap.postalCode} {nap.city}, e-mail:{" "}
              <a href={nap.emailHref} className="text-brand-600 hover:underline">{nap.email}</a>,
              tel.:{" "}
              <a href={nap.phoneHref} className="text-brand-600 hover:underline">{nap.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. Jakie dane zbieramy</h2>
            <p className="mt-3 leading-relaxed">
              Zbieramy wyłącznie dane, które dobrowolnie nam przekazujesz
              w trakcie kontaktu — w szczególności:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>imię i nazwisko,</li>
              <li>numer telefonu,</li>
              <li>adres e-mail,</li>
              <li>adres nieruchomości, której dotyczy zapytanie.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Cel i podstawa przetwarzania</h2>
            <p className="mt-3 leading-relaxed">Twoje dane przetwarzamy w celu:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                odpowiedzi na zapytanie ofertowe i przygotowania wyceny —
                podstawa: art. 6 ust. 1 lit. b RODO (wykonanie umowy lub
                podjęcie działań przed jej zawarciem),
              </li>
              <li>
                ewentualnego zawarcia i realizacji umowy o wykonanie usługi —
                podstawa: art. 6 ust. 1 lit. b RODO,
              </li>
              <li>
                wypełnienia obowiązków prawnych (np. podatkowych) — podstawa:
                art. 6 ust. 1 lit. c RODO,
              </li>
              <li>
                obrony przed roszczeniami lub dochodzenia roszczeń — podstawa:
                art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Okres przechowywania danych</h2>
            <p className="mt-3 leading-relaxed">
              Dane związane z zapytaniem ofertowym przechowujemy przez czas
              niezbędny do jego obsługi, a w przypadku zawarcia umowy — przez
              okres wymagany przepisami prawa (m.in. przepisami podatkowymi,
              tj. 5 lat od końca roku podatkowego). Po upływie tego okresu dane
              są usuwane lub anonimizowane.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">5. Odbiorcy danych</h2>
            <p className="mt-3 leading-relaxed">
              Twoje dane nie są sprzedawane ani przekazywane podmiotom trzecim
              w celach marketingowych. Możemy je udostępniać wyłącznie:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>podmiotom świadczącym usługi IT i hostingowe (przetwarzanie w naszym imieniu),</li>
              <li>biuru rachunkowemu obsługującemu firmę,</li>
              <li>organom publicznym, jeżeli wynika to z obowiązku prawnego.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">6. Twoje prawa</h2>
            <p className="mt-3 leading-relaxed">
              Na podstawie RODO przysługuje Ci prawo do:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
              <li>sprostowania (poprawiania) danych,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (ul. Stawki 2, 00-193 Warszawa).
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem
              e-mail:{" "}
              <a href={nap.emailHref} className="text-brand-600 hover:underline">{nap.email}</a>{" "}
              lub telefonicznie:{" "}
              <a href={nap.phoneHref} className="text-brand-600 hover:underline">{nap.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">7. Pliki cookies</h2>
            <p className="mt-3 leading-relaxed">
              Strona internetowa może korzystać z technicznych plików cookies
              niezbędnych do jej prawidłowego działania (np. zapamiętywanie
              preferencji). Nie stosujemy plików cookies śledzących ani
              reklamowych. Możesz zarządzać cookies w ustawieniach swojej
              przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">8. Zmiany polityki prywatności</h2>
            <p className="mt-3 leading-relaxed">
              Zastrzegamy sobie prawo do zmiany niniejszej polityki prywatności
              w przypadku zmiany przepisów prawa lub sposobu działania serwisu.
              O wszelkich zmianach poinformujemy przez aktualizację daty
              zamieszczonej na górze tej strony.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
