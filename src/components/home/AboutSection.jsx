import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  // Structured data for SEO - Enhanced with more details
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Horizonica Travel",
    "description": "Top excursions in Hurghada and Sharm El Sheikh with Horizonica Travel. Expert-designed tours for unforgettable Red Sea adventures.",
    "areaServed": ["Hurghada", "Sharm El Sheikh", "Egypt", "Red Sea"],
    "serviceType": ["Desert Safaris", "Red Sea Excursions", "Beach Holidays", "Guided Tours"],
    "slogan": "Discover Egypt with Horizonica Travel",
    "url": "https://horizonica-travel.com",
    "priceRange": "$$",
    "knowsLanguage": ["English", "German", "French", "Spanish", "Arabic"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Egypt Excursions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Hurghada Desert Safari"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "Sharm El Sheikh Snorkeling Tour"
          }
        }
      ]
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column - Enhanced with more SEO-friendly content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl relative">
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500 relative">
                Discover Egypt with Horizonica Travel
              </h2>

              <h3 className="text-lg md:text-xl font-semibold mb-6 text-orange-400">
                <strong>Top Excursions in Hurghada & Sharm El Sheikh</strong> | Red
                Sea Holidays
              </h3>

              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                At <strong>Horizonica Travel</strong>, we're not just a tour company —
                we're your gateway to <strong>unforgettable memories</strong> across
                Egypt. Whether you're dreaming of{" "}
                <strong>thrilling desert safaris</strong>, breathtaking{" "}
                <strong>Red Sea excursions</strong>, or peaceful{" "}
                <strong>beachside escapes</strong>, our expert-designed tours from{" "}
                <strong>Hurghada</strong> and <strong>Sharm El Sheikh</strong> are
                tailored to your interests.
              </p>

              <p className="text-base leading-relaxed mb-8 text-gray-600">
                From exploring ancient wonders to enjoying magical moments on
                the shores of the Red Sea, every trip with Horizonica Travel is
                crafted with care, passion, and local expertise. We're here to
                make your Egyptian adventure not only seamless — but truly
                special.
              </p>

              {/* Key Features - Enhanced with more descriptive text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {[
                  "Expert Local Egyptian Guides",
                  "Customized Red Sea Experiences",
                  "Small Group Hurghada Tours",
                  "Unforgettable Sharm Memories",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-orange-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-medium rounded-lg shadow-md transition-colors duration-300 group"
                aria-label="Learn more about Horizonica Travel excursions in Egypt"
              >
                Learn More About Us
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Column - Replaced with SEO-rich content box */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="h-[450px] md:h-[500px] w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-200 to-orange-200 flex items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                    Explore the Best of Egypt's Red Sea
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    Our <strong>Hurghada excursions</strong> and <strong>Sharm El Sheikh tours</strong> offer unforgettable experiences for every traveler. From desert adventures to underwater exploration, discover why thousands choose <strong>Horizonica Travel</strong> for their Egyptian holiday.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-bold text-orange-500 mb-2">Hurghada Tours</h4>
                      <ul className="text-gray-800 text-sm space-y-1">
                        <li>• Desert Safari Adventures</li>
                        <li>• Red Sea Snorkeling</li>
                        <li>• Luxor Day Trips</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-500 mb-2">Sharm El Sheikh</h4>
                      <ul className="text-gray-800 text-sm space-y-1">
                        <li>• Ras Mohammed Tours</li>
                        <li>• Bedouin Experiences</li>
                        <li>• Diving Excursions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="text-orange-500 font-bold text-lg mb-1">10+ Years</div>
                <div className="text-gray-700 text-sm">Creating unforgettable Egyptian adventures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
