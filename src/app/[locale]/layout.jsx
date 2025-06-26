import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenuProvider from "@/context/MobileMenuContext";
import FixedButtons from "@/ui/FixedButtons";

const roboto = Roboto({
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const domain = "https://horizonica-travel.com";

  const titles = {
    en: "Top Excursions in Hurghada & Sharm El Sheikh | Red Sea Holidays - Horizonica Travel",
    de: "Top-Ausflüge in Hurghada und Sharm El Sheikh | Urlaub am Roten Meer - Horizonica Travel",
    fr: "Meilleures excursions à Hurghada et Sharm El Sheikh | Vacances en mer Rouge - Horizonica Travel",
    es: "Mejores excursiones en Hurghada y Sharm El Sheikh | Vacaciones en el Mar Rojo - Horizonica Travel",
  };

  const descriptions = {
    en: "Book the best excursions in Hurghada and Sharm El Sheikh with Horizonica Travel. Desert safaris, snorkeling trips, and guided tours with expert local guides. Unforgettable Red Sea adventures await!",
    de: "Buchen Sie die besten Ausflüge in Hurghada und Sharm El Sheikh mit Horizonica Travel. Wüstensafaris, Schnorchelausflüge und geführte Touren mit erfahrenen lokalen Führern. Unvergessliche Abenteuer am Roten Meer warten auf Sie!",
    fr: "Réservez les meilleures excursions à Hurghada et Sharm El Sheikh avec Horizonica Travel. Safaris dans le désert, excursions de plongée en apnée et visites guidées avec des guides locaux experts. Des aventures inoubliables en mer Rouge vous attendent!",
    es: "Reserve las mejores excursiones en Hurghada y Sharm El Sheikh con Horizonica Travel. Safaris por el desierto, excursiones de snorkel y visitas guiadas con guías locales expertos. ¡Le esperan aventuras inolvidables en el Mar Rojo!",
  };

  const keywords = {
    en: "Hurghada excursions, Sharm El Sheikh tours, Red Sea holidays, Egypt tours, desert safari, snorkeling trips, diving excursions, Horizonica Travel",
    de: "Hurghada Ausflüge, Sharm El Sheikh Touren, Urlaub am Roten Meer, Ägypten Touren, Wüstensafari, Schnorchelausflüge, Tauchausflüge, Horizonica Travel",
    fr: "Excursions à Hurghada, visites à Sharm El Sheikh, vacances en mer Rouge, visites en Égypte, safari dans le désert, excursions de plongée en apnée, excursions de plongée, Horizonica Travel",
    es: "Excursiones en Hurghada, tours en Sharm El Sheikh, vacaciones en el Mar Rojo, tours en Egipto, safari por el desierto, excursiones de snorkel, excursiones de buceo, Horizonica Travel",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: keywords[locale] || keywords.en,
    metadataBase: new URL(domain),
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `${domain}/${locale}`,
      siteName: "Horizonica Travel",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${domain}/images/sharm-elsheikh-and-hurghada-img.jpeg`,
          width: 1200,
          height: 630,
          alt: "Horizonica Travel - Excursions in Hurghada and Sharm El Sheikh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: [`${domain}/images/sharm-elsheikh-and-hurghada-img.jpeg`],
    },
    alternates: {
      canonical: `${domain}/${locale}`,
      languages: {
        en: `${domain}/en`,
        de: `${domain}/de`,
        fr: `${domain}/fr`,
        es: `${domain}/es`,
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // استخدام await لفك الـ promise

  // Structured data for the entire website
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Horizonica Travel",
    url: "https://horizonica-travel.com",
    logo: "https://horizonica-travel.com/logo.png",
    description:
      "Top excursions in Hurghada and Sharm El Sheikh with Horizonica Travel. Expert-designed tours for unforgettable Red Sea adventures.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hurghada",
      addressRegion: "Red Sea",
      addressCountry: "Egypt",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.2579",
      longitude: "33.8116",
    },
    telephone: "+20123456789",
    email: "info@horizonica-travel.com",
    sameAs: ["https://www.facebook.com/horizonica"],
    areaServed: ["Hurghada", "Sharm El Sheikh", "Red Sea", "Egypt"],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };

  return (
    <html lang={locale}>
      <body
        className={`${roboto.className} antialiased min-h-screen flex flex-col`}
      >
        {/* Add structured data to the entire site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MobileMenuProvider>
          <Header locale={locale} />
          <main className="flex-grow mt-[64px]">{children}</main>
          <Footer />
          <FixedButtons />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
