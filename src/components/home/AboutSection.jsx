import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  // Structured data for SEO - Enhanced with more details
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Horizonica Travel",
    description:
      "Top excursions in Hurghada and Sharm El Sheikh with Horizonica Travel. Expert-designed tours for unforgettable Red Sea adventures.",
    areaServed: ["Hurghada", "Sharm El Sheikh", "Egypt", "Red Sea"],
    serviceType: [
      "Desert Safaris",
      "Red Sea Excursions",
      "Beach Holidays",
      "Guided Tours",
    ],
    slogan: "Discover Egypt with Horizonica Travel",
    url: "https://horizonica-travel.com",
    priceRange: "$$",
    knowsLanguage: ["English", "German", "French", "Spanish", "Arabic"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Egypt Excursions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Hurghada Desert Safari",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Sharm El Sheikh Snorkeling Tour",
          },
        },
      ],
    },
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-blue-50"
      aria-label="About Horizonica Travel"
      id="about-section"
    >
      {/* Enhanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Full-width content box */}
          <div>
            <div className="relative">
              <div className="h-[600px] md:h-[500px] w-full rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-orange-200 opacity-90"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8">
                  <div className="text-center max-w-2xl">
                    <h3 className="text-xl md:text-3xl font-bold text-orange-600 mb-3 md:mb-4 drop-shadow-sm">
                      Hurghada Excursions: Top-Rated Day Trips from Hurghada
                    </h3>

                    <p className="text-gray-800 mb-4 md:mb-8 text-sm md:text-base leading-relaxed">
                      Explore the magic of the Red Sea with our unforgettable
                      Hurghada excursions. Whether you're dreaming of vibrant
                      coral reefs, desert safaris, or cultural experiences in
                      Luxor and Cairo, our excursions from Hurghada offer
                      something for everyone. Enjoy the sun, turquoise waters,
                      and golden beaches, or take one of our guided day trips
                      from Hurghada to discover ancient wonders like the Valley
                      of the Kings or the majestic Pyramids. With professional
                      service, easy booking, and top-rated customer support, we
                      make sure your adventure is both safe and memorable.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-left">
                      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-gray-800 text-xs md:text-sm">
                          <div className="flex items-start">
                            <span className="text-orange-600 mr-2 text-base md:text-lg">
                              •
                            </span>
                            <span className="font-medium">
                              Hurghada Desert Safari
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-gray-800 text-xs md:text-sm">
                          <div className="flex items-start">
                            <span className="text-orange-600 mr-2 text-base md:text-lg">
                              •
                            </span>
                            <span className="font-medium">
                              Luxor Day Trips from Hurghada
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-gray-800 text-xs md:text-sm">
                          <div className="flex items-start">
                            <span className="text-orange-600 mr-2 text-base md:text-lg">
                              •
                            </span>
                            <span className="font-medium">
                              Cairo Day Trips from Hurghada
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-gray-800 text-xs md:text-sm">
                          <div className="flex items-start">
                            <span className="text-orange-600 mr-2 text-base md:text-lg">
                              •
                            </span>
                            <span className="font-medium">
                              Snorkeling from Hurghada
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="text-orange-500 font-bold text-lg mb-1">
                  10+ Years
                </div>
                <div className="text-gray-700 text-sm">
                  Creating unforgettable Egyptian adventures
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
