import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ dictionary: t }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Horizonica Travel",
    description:
      "Top excursions in Hurghada and Sharm El Sheikh with Horizonica Travel. Dive into thrilling Red Sea adventures, desert safaris, and unforgettable holidays.",
    image: "/images/sharm-elsheikh-and-hurghada-img.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hurghada",
      addressRegion: "Red Sea",
      addressCountry: "Egypt",
    },
  };

  return (
    <section
      className="relative min-h-[calc(100vh-64px)] bg-orange-500 flex items-center justify-center overflow-hidden"
      aria-label="Main Hero Section"
    >
      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      {/* Background Image (Optimized) */}
      <div className="absolute inset-0">
        <Image
          src="/images/sharm-elsheikh-and-hurghada-img.jpeg"
          alt={t.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-sky-950/65" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div
            role="note"
            className="inline-block px-4 py-1 bg-orange-400 text-white rounded-full font-medium mb-3 animate-pulse"
          >
            {t.badge}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {t.titleBefore}
            <span className="text-orange-400"> {t.hurghada}</span> &amp;
            <span className="text-orange-400"> {t.sharm}</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mb-4 text-orange-300">
            {t.subtitle}
          </h2>

          {/* Optimized Paragraph */}
          <p className="text-base sm:text-xl tracking-wide mb-8 text-white">
            <span
              dangerouslySetInnerHTML={{
                __html: t.paragraph1.replace(
                  /Sharm El Sheikh tours|Hurghada trips/g,
                  "<strong>$&</strong>"
                ),
              }}
            />{" "}
            <strong>{t.with} Horizonica Travel</strong>. {t.paragraph2}{" "}
            <strong>{t.excursions}</strong>, {t.safaris}{" "}
            <strong>{t.holidays}</strong> — {t.ending}
          </p>

          {/* CTA Buttons with ARIA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="px-6 py-3 text-base text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 font-medium rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
              aria-label={`${t.bookNow} for Sharm El Sheikh and Hurghada tours`}
              prefetch={false}
            >
              {t.bookNow}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-base text-orange-600 bg-white/80 hover:bg-white/60 border border-white font-medium rounded-lg transition-colors duration-300 hover:shadow-lg"
              aria-label="Learn more about Horizonica Travel"
              prefetch={false}
            >
              {t.learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* Optimized Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 w-full" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          role="img"
          aria-label="Wave decoration"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
