import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ContactSection from "@/components/hurghadaPage/ContactSection";
import { excursionsData } from "@/data/excursions";

export const generateMetadata = () => {
  return {
    title: "Hurghada Excursions | Horizonica Travel",
    description:
      "Discover top-rated Hurghada tours, desert safaris, and Red Sea adventures with Horizonica Travel.",
    alternates: {
      canonical: "/en/hurghada-excursions",
    },
    openGraph: {
      title: "Hurghada Excursions",
      description: "Desert Safari & Red Sea Adventures in Hurghada",
      url: "https://yourdomain.com/en/hurghada-excursions",
    },
  };
};

const HurghadaExcursions = () => {
  const hurghadaExcursionsData = [
    {
      id: 1,
      title: "Hurghada Desert Safari Tours",
      desc: "Experience the ultimate Desert Safari from Hurghada with thrilling quad biking, buggy rides, jeep safari, and magical stargazing under the desert sky with visiting Bedouin village from Hurghada.",
      img: "/images/Hurghada-Desert-Safari-Tours.jpg",
      slug: "Hurghada-safari",
    },
    {
      id: 2,
      title:
        "Best Excursions from Hurghada & Sea Trips - Best Things to Do in Hurghada",
      desc: "Join top-rated Hurghada sea trips including Dolphin House, snorkeling to Paradise, Orange Bay, Magawish and Nemo, Giftun, and more – with excellent service and great prices.",
      img: "/images/Best-Excursions-from-Hurghada-and-Sea-Trips.jpg",
      slug: "sea-trips",
    },
    {
      id: 3,
      title: "Luxor Day Trips from Hurghada",
      desc: "Discover Luxor on a day trip from Hurghada with air-conditioned transport by bus or minivan. Visit Karnak Temple, Hatshepsut Temple, Colossi of Memnon, and the Valley of the Kings with a private guide, enjoy a Nile crossing and a delicious lunch.",
      img: "/images/Luxor-Day-Trips-from-Hurghada.jpg",
      slug: "Luxor-trips",
    },
    {
      id: 4,
      title:
        "Cairo and Pyramids Tour from Hurghada – Best Day Trip to Giza & Egyptian Museum",
      desc: "Enjoy a full-day Cairo tour from Hurghada with comfortable transfers by air-conditioned bus or minivan. Explore the majestic Giza Pyramids, the Sphinx, and the world-famous Egyptian Museum with a professional guide with delicious lunch.",
      img: "/images/Cairo-and-Pyramids-Tour-from-Hurghada.jpg",
      slug: "cairo-pyramids-tour",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-orange-600 py-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              DISCOVER EGYPT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unforgettable Hurghada Excursions
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
              Explore the best things to do in Hurghada with Horizonica Travel.
              From desert adventures to Red Sea wonders, we offer the most
              memorable experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hurghadaExcursionsData.map((excursion) => (
            <div
              key={excursion.id}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
                  <Image
                    src={excursion.img}
                    alt={excursion.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {excursion.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{excursion.desc}</p>
                  </div>

                  <Link
                    href={`/hurghada-excursions/${excursion.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 self-start"
                  >
                    View Details
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
};

export default HurghadaExcursions;
