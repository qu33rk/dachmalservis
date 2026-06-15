import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Usługi dekarskie Bydgoszcz | Dachmalservis.pl",
    template: "%s | Dachmalservis.pl",
  },
  description: siteConfig.description,
  keywords: [
    "usługi dekarskie Bydgoszcz",
    "dekarz Bydgoszcz",
    "malowanie dachów Bydgoszcz",
    "mycie dachów Bydgoszcz",
    "remonty dachów Bydgoszcz",
    "obróbki blacharskie Bydgoszcz",
    "docieplenia Bydgoszcz",
    "rynny Bydgoszcz",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Usługi dekarskie Bydgoszcz | Dachmalservis.pl",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
