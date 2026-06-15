export type ServiceCategoryId =
  | "mycie-malowanie"
  | "remonty-dachow"
  | "rynny-blacharka"
  | "elewacje-docieplenia";

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategoryId;
  /** Lucide icon name resolved in the UI layer */
  icon: string;
  shortDescription: string;
  intro: string;
  paragraphs: string[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mycie-malowanie",
    title: "Mycie i malowanie",
    description:
      "Renowacja dachów, elewacji i kostki brukowej — czyszczenie ciśnieniowe oraz malowanie powłokami zabezpieczającymi.",
  },
  {
    id: "remonty-dachow",
    title: "Naprawy i remonty dachów",
    description:
      "Kompleksowe naprawy pokryć skośnych i płaskich — dachówka, papa termozgrzewalna oraz styropapa.",
  },
  {
    id: "rynny-blacharka",
    title: "Rynny i obróbki blacharskie",
    description:
      "Montaż i naprawa systemów rynnowych oraz precyzyjne obróbki blacharskie zabezpieczające dach.",
  },
  {
    id: "elewacje-docieplenia",
    title: "Elewacje i docieplenia",
    description:
      "Remonty elewacji oraz docieplenia budynków w technologii styropianu i wełny mineralnej.",
  },
];

export const services: Service[] = [
  {
    slug: "mycie-i-malowanie-dachow",
    title: "Mycie i malowanie dachów",
    category: "mycie-malowanie",
    icon: "Droplets",
    shortDescription:
      "Czyszczenie ciśnieniowe i malowanie dachów powłokami ochronnymi, które przedłużają żywotność pokrycia.",
    intro:
      "Mycie i malowanie dachów w Bydgoszczy to skuteczny sposób na odświeżenie pokrycia bez kosztownej wymiany. Usuwamy mech, glony i zabrudzenia, a następnie zabezpieczamy powierzchnię trwałą powłoką.",
    paragraphs: [
      "Z biegiem lat na powierzchni dachówki gromadzą się mech, porosty i osady, które zatrzymują wilgoć i przyspieszają niszczenie pokrycia. Profesjonalne mycie ciśnieniowe usuwa te zanieczyszczenia, przywracając dachowi estetyczny wygląd.",
      "Po dokładnym oczyszczeniu i osuszeniu nakładamy powłoki gruntujące oraz nawierzchniowe, które chronią dachówkę przed wilgocią, promieniowaniem UV i ponownym rozwojem mchu. Malowanie pozwala również dobrać kolor pokrycia do elewacji budynku.",
      "Pracujemy na dachach ceramicznych, cementowych i blaszanych, dobierając technologię oraz środki do rodzaju pokrycia. Każde zlecenie poprzedzamy oględzinami i bezpłatną wyceną.",
    ],
    features: [
      "Mycie ciśnieniowe i usuwanie mchu oraz porostów",
      "Gruntowanie i malowanie powłokami zabezpieczającymi",
      "Dobór koloru pokrycia do elewacji",
      "Zabezpieczenie antywilgociowe i UV",
    ],
    metaTitle: "Mycie i malowanie dachów Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Mycie i malowanie dachów w Bydgoszczy. Usuwanie mchu, czyszczenie ciśnieniowe i malowanie powłokami ochronnymi. Bezpłatna wycena.",
  },
  {
    slug: "mycie-i-malowanie-kostki-brukowej",
    title: "Mycie i malowanie kostki brukowej",
    category: "mycie-malowanie",
    icon: "Grid3x3",
    shortDescription:
      "Renowacja podjazdów, tarasów i chodników — czyszczenie, fugowanie i impregnacja kostki brukowej.",
    intro:
      "Mycie i malowanie kostki brukowej przywraca świeży wygląd podjazdom, tarasom i alejkom. Usuwamy zabrudzenia, uzupełniamy fugi i zabezpieczamy powierzchnię impregnatem.",
    paragraphs: [
      "Kostka brukowa narażona jest na zabrudzenia, mech oraz wykwity, które z czasem szpecą nawierzchnię. Mycie ciśnieniowe skutecznie usuwa osady z całej powierzchni oraz spomiędzy fug.",
      "Po oczyszczeniu uzupełniamy piasek fugujący i nakładamy impregnat lub powłokę barwiącą, która podkreśla kolor kostki i chroni ją przed wnikaniem wody oraz brudu.",
      "Zabezpieczona kostka jest łatwiejsza w utrzymaniu czystości, mniej podatna na rozwój mchu i dłużej zachowuje intensywny kolor.",
    ],
    features: [
      "Mycie ciśnieniowe podjazdów, tarasów i chodników",
      "Usuwanie mchu, chwastów i wykwitów",
      "Uzupełnianie fug piaskiem kwarcowym",
      "Impregnacja i powłoki barwiące",
    ],
    metaTitle: "Mycie i malowanie kostki brukowej Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Czyszczenie i impregnacja kostki brukowej w Bydgoszczy. Mycie ciśnieniowe podjazdów i tarasów, fugowanie, malowanie. Zapytaj o wycenę.",
  },
  {
    slug: "mycie-oraz-malowanie-elewacji",
    title: "Mycie oraz malowanie elewacji",
    category: "mycie-malowanie",
    icon: "Building2",
    shortDescription:
      "Czyszczenie i malowanie fasad budynków — odświeżenie elewacji bez kosztownego remontu.",
    intro:
      "Mycie oraz malowanie elewacji to szybki sposób na odnowienie fasady domu lub budynku usługowego. Usuwamy zabrudzenia i glony, a następnie nakładamy farbę elewacyjną.",
    paragraphs: [
      "Elewacja narażona jest na działanie warunków atmosferycznych, zanieczyszczeń i rozwój glonów. Regularne mycie pozwala usunąć osady i ocenić stan tynku przed malowaniem.",
      "Stosujemy farby elewacyjne odporne na promieniowanie UV i zmienne warunki pogodowe, dobierając kolorystykę do charakteru budynku. Malowanie nie tylko odświeża wygląd, ale i chroni tynk.",
      "Pracujemy bezpiecznie z wykorzystaniem rusztowań lub technik dostępu, zachowując czystość terenu wokół budynku.",
    ],
    features: [
      "Mycie ciśnieniowe i usuwanie glonów z fasady",
      "Naprawa drobnych ubytków tynku",
      "Malowanie trwałymi farbami elewacyjnymi",
      "Dobór kolorystyki do budynku",
    ],
    metaTitle: "Mycie oraz malowanie elewacji Bydgoszcz | Dach Mal Servis",
    metaDescription:
      "Mycie oraz malowanie elewacji i fasad w Bydgoszczy. Usuwanie glonów, czyszczenie ciśnieniowe i malowanie farbami elewacyjnymi. Bezpłatna wycena.",
  },
  {
    slug: "naprawy-dachowki-rynien-i-gasiorow",
    title: "Naprawy dachówki, rynien i gąsiorów",
    category: "remonty-dachow",
    icon: "Wrench",
    shortDescription:
      "Wymiana uszkodzonej dachówki, naprawa gąsiorów i rynien oraz uszczelnianie pokrycia.",
    intro:
      "Naprawy dachówki, rynien i gąsiorów pozwalają zatrzymać przecieki i przedłużyć życie dachu. Lokalizujemy uszkodzenia i wymieniamy zniszczone elementy pokrycia.",
    paragraphs: [
      "Pęknięta dachówka, obluzowane gąsiory czy nieszczelne rynny prowadzą do przecieków i zawilgocenia konstrukcji. Szybka naprawa jest tańsza niż usuwanie skutków zalania.",
      "Wymieniamy uszkodzone dachówki, mocujemy i uszczelniamy gąsiory na sucho lub na zaprawę, a także regulujemy i naprawiamy rynny, aby zapewnić prawidłowy odpływ wody.",
      "Po wykonaniu napraw sprawdzamy szczelność całego pokrycia i wskazujemy elementy, które mogą wymagać uwagi w przyszłości.",
    ],
    features: [
      "Wymiana pękniętej i uszkodzonej dachówki",
      "Mocowanie i uszczelnianie gąsiorów",
      "Naprawa i regulacja rynien",
      "Kontrola szczelności pokrycia",
    ],
    metaTitle: "Naprawa dachów i dachówki Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Naprawa dachówki, gąsiorów i rynien w Bydgoszczy. Usuwanie przecieków, wymiana uszkodzonych elementów pokrycia. Szybka i solidna usługa.",
  },
  {
    slug: "remonty-dachow-plaskich",
    title: "Remonty dachów płaskich",
    category: "remonty-dachow",
    icon: "Layers",
    shortDescription:
      "Renowacja i uszczelnianie dachów płaskich — papa termozgrzewalna oraz nowoczesne membrany.",
    intro:
      "Remonty dachów płaskich obejmują uszczelnienie, wymianę pokrycia i poprawę odprowadzania wody. Dobieramy technologię do stanu i przeznaczenia dachu.",
    paragraphs: [
      "Dachy płaskie szczególnie narażone są na zaleganie wody i przecieki. Przed remontem oceniamy stan podłoża oraz istniejących warstw pokrycia.",
      "W zależności od potrzeb układamy papę termozgrzewalną w systemie jedno- lub dwuwarstwowym, naprawiamy obróbki i wpusty dachowe oraz poprawiamy spadki.",
      "Prawidłowo wykonany remont dachu płaskiego zapewnia szczelność na lata i chroni budynek przed wilgocią.",
    ],
    features: [
      "Diagnoza stanu pokrycia i podłoża",
      "Pokrycia z papy termozgrzewalnej",
      "Naprawa wpustów i obróbek dachowych",
      "Poprawa spadków i odprowadzania wody",
    ],
    metaTitle: "Remonty dachów płaskich Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Remonty i uszczelnianie dachów płaskich w Bydgoszczy. Papa termozgrzewalna, naprawa obróbek i wpustów. Trwałe i szczelne pokrycia.",
  },
  {
    slug: "styropapa-papa-termozgrzewalna",
    title: "Styropapa, papa termozgrzewalna",
    category: "remonty-dachow",
    icon: "Flame",
    shortDescription:
      "Pokrycia dachów płaskich w technologii styropapy oraz papy termozgrzewalnej z ociepleniem.",
    intro:
      "Styropapa i papa termozgrzewalna to sprawdzone rozwiązania dla dachów płaskich, które łączą szczelność z dobrą izolacją termiczną.",
    paragraphs: [
      "Styropapa to płyta łącząca warstwę styropianu z papą podkładową, dzięki czemu w jednym kroku ocieplamy i przygotowujemy dach pod pokrycie wierzchnie.",
      "Papę termozgrzewalną zgrzewamy palnikiem do podłoża, uzyskując szczelne, trwałe połączenie warstw odporne na warunki atmosferyczne.",
      "Łącząc obie technologie, wykonujemy kompletne, ocieplone pokrycia dachów płaskich na budynkach mieszkalnych, gospodarczych i usługowych.",
    ],
    features: [
      "Układanie styropapy z ociepleniem",
      "Zgrzewanie papy termozgrzewalnej",
      "Systemy jedno- i dwuwarstwowe",
      "Ocieplenie i szczelność w jednej technologii",
    ],
    metaTitle: "Styropapa i papa termozgrzewalna Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Pokrycia dachów płaskich styropapą i papą termozgrzewalną w Bydgoszczy. Ocieplenie i szczelne pokrycie w jednej technologii.",
  },
  {
    slug: "rynny",
    title: "Rynny",
    category: "rynny-blacharka",
    icon: "Droplet",
    shortDescription:
      "Montaż, wymiana i konserwacja systemów rynnowych zapewniających sprawne odprowadzanie wody.",
    intro:
      "Sprawny system rynnowy chroni elewację i fundamenty przed wodą. Montujemy, wymieniamy i konserwujemy rynny oraz rury spustowe.",
    paragraphs: [
      "Rynny odprowadzają wodę opadową z dachu z dala od budynku. Nieszczelne lub niedrożne rynny prowadzą do zawilgocenia ścian i fundamentów.",
      "Montujemy systemy rynnowe stalowe i PCV, dobierając przekrój do powierzchni dachu. Wymieniamy uszkodzone odcinki i poprawiamy mocowania oraz spadki.",
      "Oferujemy również czyszczenie i konserwację rynien, dzięki czemu zachowują drożność i sprawnie działają przez cały rok.",
    ],
    features: [
      "Montaż nowych systemów rynnowych",
      "Wymiana uszkodzonych rynien i rur spustowych",
      "Regulacja spadków i mocowań",
      "Czyszczenie i konserwacja",
    ],
    metaTitle: "Montaż i naprawa rynien Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Montaż, wymiana i konserwacja rynien w Bydgoszczy. Systemy rynnowe stalowe i PCV, naprawa rur spustowych. Sprawne odprowadzanie wody.",
  },
  {
    slug: "obrobki-blacharskie",
    title: "Wszelkie obróbki blacharskie",
    category: "rynny-blacharka",
    icon: "Hammer",
    shortDescription:
      "Precyzyjne obróbki blacharskie kominów, okapów i krawędzi dachu zabezpieczające przed wodą.",
    intro:
      "Obróbki blacharskie zabezpieczają newralgiczne miejsca dachu przed wnikaniem wody. Wykonujemy je na wymiar, dopasowując do każdej konstrukcji.",
    paragraphs: [
      "Obróbki blacharskie wykończają i uszczelniają miejsca styku pokrycia z kominami, ścianami, okapami czy attykami. To właśnie tam najczęściej dochodzi do przecieków.",
      "Wykonujemy obróbki z blachy ocynkowanej, powlekanej i tytanowo-cynkowej, formując elementy na wymiar dla konkretnego dachu.",
      "Staranne obróbki blacharskie nie tylko chronią konstrukcję, ale też porządkują wygląd dachu i podnoszą jego estetykę.",
    ],
    features: [
      "Obróbki kominów, okapów i krawędzi dachu",
      "Obróbki attyk i ścian kolankowych",
      "Blacha ocynkowana, powlekana i tytan-cynk",
      "Elementy formowane na wymiar",
    ],
    metaTitle: "Obróbki blacharskie Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Obróbki blacharskie w Bydgoszczy — kominy, okapy, attyki i krawędzie dachu. Elementy na wymiar z blachy ocynkowanej i tytan-cynk.",
  },
  {
    slug: "remonty-elewacji",
    title: "Remonty elewacji",
    category: "elewacje-docieplenia",
    icon: "Building",
    shortDescription:
      "Kompleksowa renowacja fasad — naprawa tynków, gruntowanie i nakładanie nowych powłok.",
    intro:
      "Remonty elewacji przywracają fasadzie estetykę i chronią mury przed wilgocią. Naprawiamy tynki, gruntujemy i wykańczamy powierzchnię.",
    paragraphs: [
      "Z czasem tynk elewacyjny pęka, odpada i traci kolor, a fasada wygląda na zaniedbaną. Remont pozwala odnowić budynek i zabezpieczyć go na lata.",
      "Skuwamy odspojone fragmenty, uzupełniamy ubytki, gruntujemy podłoże i nakładamy nowe tynki lub powłoki malarskie odporne na warunki atmosferyczne.",
      "Remont elewacji często łączymy z dociepleniem budynku, co poprawia komfort i obniża koszty ogrzewania.",
    ],
    features: [
      "Naprawa i uzupełnianie tynków",
      "Gruntowanie podłoża",
      "Nakładanie tynków i powłok elewacyjnych",
      "Możliwość połączenia z dociepleniem",
    ],
    metaTitle: "Remonty elewacji Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Remonty elewacji w Bydgoszczy. Naprawa tynków, gruntowanie i nowe powłoki elewacyjne. Odnowienie i zabezpieczenie fasady budynku.",
  },
  {
    slug: "docieplenia-budynkow",
    title: "Docieplenia: styropian, wełna mineralna",
    category: "elewacje-docieplenia",
    icon: "Shield",
    shortDescription:
      "Docieplenia budynków w technologii ETICS — styropian lub wełna mineralna, siatka, klej i struktura.",
    intro:
      "Docieplenia budynków poprawiają komfort cieplny i obniżają rachunki za ogrzewanie. Wykonujemy ocieplenia w systemie ETICS ze styropianu lub wełny mineralnej.",
    paragraphs: [
      "Docieplenie elewacji ogranicza straty ciepła i chroni mury przed wilgocią oraz przemarzaniem. To inwestycja, która zwraca się w niższych kosztach ogrzewania.",
      "Pracujemy w kompletnym systemie ociepleń: klej, płyty styropianu lub wełny mineralnej, kołkowanie, warstwa zbrojąca z siatki, klej i tynk strukturalny jako wykończenie.",
      "Dobieramy grubość i rodzaj izolacji do budynku oraz oczekiwań inwestora, zapewniając trwały i estetyczny efekt końcowy.",
    ],
    features: [
      "Ocieplenie styropianem lub wełną mineralną",
      "System ETICS: klej, siatka, struktura",
      "Kołkowanie i warstwa zbrojąca",
      "Tynk strukturalny jako wykończenie",
    ],
    metaTitle: "Docieplenia budynków Bydgoszcz | Dachmalservis.pl",
    metaDescription:
      "Docieplenia budynków w Bydgoszczy — styropian i wełna mineralna, siatka, klej i tynk strukturalny. System ETICS. Bezpłatna wycena.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((service) => service.category === category);
}

export const serviceSlugs = services.map((service) => service.slug);
