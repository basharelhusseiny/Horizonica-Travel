import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaStar, FaArrowRight, FaClock, FaUsers } from 'react-icons/fa';

const HighlightsSection = () => {
  // SEO-optimized structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristAttraction",
          "name": "Desert Safari Adventures in Hurghada",
          "description": "Experience thrilling desert safaris with quad bikes, camel rides, and authentic Bedouin experiences in Hurghada.",
          "image": "/images/sharm-elsheikh-and-hurghada-img.jpeg"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristAttraction",
          "name": "Snorkeling in Sharm El Sheikh",
          "description": "Discover the vibrant underwater world of the Red Sea with guided snorkeling tours in Sharm El Sheikh.",
          "image": "/images/sharm-elsheikh-and-hurghada-img.jpeg"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "TouristAttraction",
          "name": "Luxor Day Trip from Hurghada",
          "description": "Explore ancient Egyptian history with a day trip to Luxor from Hurghada, visiting temples and tombs.",
          "image": "/images/sharm-elsheikh-and-hurghada-img.jpeg"
        }
      }
    ]
  };

  // Tour highlights data
  const highlights = [
    {
      id: 1,
      title: "Desert Safari Adventures",
      location: "Hurghada, Egypt",
      description: "Experience thrilling desert safaris with quad bikes, camel rides, and authentic Bedouin experiences.",
      rating: 4.9,
      reviews: 128,
      duration: "6 hours",
      groupSize: "Small group",
      image: "/images/sharm-elsheikh-and-hurghada-img.jpeg",
      alt: "Desert Safari Adventures in Hurghada with quad bikes and camels",
      featured: true,
      originalPrice: "$65",
      discountedPrice: "$45"
    },
    {
      id: 2,
      title: "Red Sea Snorkeling Tours",
      location: "Sharm El Sheikh, Egypt",
      description: "Discover the vibrant underwater world of the Red Sea with our guided snorkeling tours to the best spots.",
      rating: 4.8,
      reviews: 156,
      duration: "5 hours",
      groupSize: "Small group",
      image: "/images/sharm-elsheikh-and-hurghada-img.jpeg",
      alt: "Snorkeling in the crystal clear waters of the Red Sea in Sharm El Sheikh",
      featured: false,
      originalPrice: "$50",
      discountedPrice: "$35"
    },
    {
      id: 3,
      title: "Luxor Day Trip",
      location: "Luxor from Hurghada",
      description: "Explore ancient Egyptian history with a day trip to Luxor, visiting temples and tombs with expert guides.",
      rating: 4.9,
      reviews: 112,
      duration: "Full day",
      groupSize: "Medium group",
      image: "/images/sharm-elsheikh-and-hurghada-img.jpeg",
      alt: "Luxor temples and ancient Egyptian monuments day trip from Hurghada",
      featured: true,
      originalPrice: "$120",
      discountedPrice: "$85"
    },
    {
      id: 4,
      title: "Ras Mohammed National Park",
      location: "Sharm El Sheikh, Egypt",
      description: "Visit the stunning Ras Mohammed National Park, known for its incredible marine life and beautiful landscapes.",
      rating: 4.7,
      reviews: 98,
      duration: "7 hours",
      groupSize: "Small group",
      image: "/images/sharm-elsheikh-and-hurghada-img.jpeg",
      alt: "Beautiful coral reefs and marine life at Ras Mohammed National Park in Sharm El Sheikh",
      featured: false,
      originalPrice: "$75",
      discountedPrice: "$55"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50" aria-label="Popular Tour Highlights">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            POPULAR EXPERIENCES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Unforgettable <span className="text-orange-500">Adventures</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our most popular tours and excursions in Hurghada and Sharm El Sheikh. 
            Handcrafted experiences with our expert local guides.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {highlight.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    FEATURED
                  </div>
                )}
                
                {/* Price Tag with Discount - Improved Design */}
                <div className="absolute -bottom-3 right-4 z-10">
                  <div className="relative">
                    <div className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-t-lg">
                      SALE
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-2 flex items-center">
                      <span className="text-gray-400 text-xs line-through mr-2">{highlight.originalPrice}</span>
                      <span className="text-orange-500 font-bold text-lg">{highlight.discountedPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center text-orange-500 text-sm mb-3">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{highlight.location}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                {/* Tour Details */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaClock className="mr-1 text-orange-400" />
                    <span>{highlight.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1 text-orange-400" />
                    <span>{highlight.groupSize}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-5">
                  {highlight.description}
                </p>
                
                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                
                {/* Rating and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(highlight.rating) ? 'text-yellow-400' : 'text-gray-200'} w-4 h-4`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-700 text-sm ml-2">
                      <span className="font-bold">{highlight.rating}</span>
                      <span className="text-gray-500 ml-1">({highlight.reviews})</span>
                    </span>
                  </div>
                  
                  <Link 
                    href="/tours" 
                    className="flex items-center justify-center w-10 h-10 bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white rounded-full transition-colors duration-300"
                  >
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/tours"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white font-medium rounded-lg shadow-lg hover:shadow-orange-300/30 transition-all duration-300"
          >
            Explore All Tours
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection
