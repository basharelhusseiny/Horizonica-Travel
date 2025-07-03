"use client";

import { excursionsData } from "@/data/excursions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaStar,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowLeft,
  FaCalendarAlt,
  FaInfoCircle,
  FaRoute,
  FaShieldAlt,
  FaMoneyBillWave,
  FaCamera,
} from "react-icons/fa";

// Metadata generation moved to a separate file for client component compatibility

const TourDetailPage = ({ params }) => {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const { slug, category } = unwrappedParams;

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the tour data
    const excursions = excursionsData[category];
    const foundTour = excursions?.find((tour) => tour.slug === slug);

    if (foundTour) {
      setTour(foundTour);
    }
    setLoading(false);
  }, [slug, category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
      </div>
    );
  }

  if (!tour) return notFound();

  const {
    title,
    description,
    mainImage,
    gallery = [],
    price,
    priceOld,
    duration,
    location,
    groupSize,
    rating,
    reviews,
    details = {},
    includes = [],
    excludes = [],
    whatToBring,
    highlights = [],
  } = tour;

  // Extract data from details object
  const {
    overview = "",
    tourHighlights = {},
    itinerary = [],
    pricing = "",
    inclusions = "",
    exclusions = "",
    whatToBring: detailsWhatToBring = "",
    bookingInfo = "",
  } = details || {};

  // Use data from details if available, otherwise use top-level data
  const finalIncludes = inclusions
    ? inclusions.split("\n").filter((item) => item.trim())
    : includes;
  const finalExcludes = exclusions
    ? exclusions.split("\n").filter((item) => item.trim())
    : excludes;
  const finalWhatToBring = detailsWhatToBring || whatToBring;

  // Combine main image with gallery for the swiper
  const allImages = [mainImage, ...gallery];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          href={`/hurghada-excursions/${category}`}
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Back to{" "}
          {category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Link>
      </div>

      {/* Hero Section with Swiper - Further Reduced Height */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image Swiper - Further Reduced Height */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              effect="fade"
              loop={true}
              className="h-full w-full rounded-t-2xl"
            >
              {allImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={img}
                      alt={`${title} - image ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />

                    {/* Overlay gradient for text readability - Lighter */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Title Overlay - More Compact */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6 pointer-events-none">
              <div className="max-w-3xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-lg">
                  {title}
                </h1>
                <p className="text-white/90 text-xs sm:text-sm mb-2 max-w-2xl drop-shadow-md line-clamp-2">
                  {description}
                </p>

                {/* Info Badges - More Compact */}
                <div className="flex flex-wrap gap-1.5 mb-1">
                  {duration && (
                    <span className="bg-orange-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-sm">
                      <FaClock className="mr-1 text-xs" />
                      {duration}
                    </span>
                  )}
                  {location && (
                    <span className="bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-sm">
                      <FaMapMarkerAlt className="mr-1 text-xs" />
                      {location}
                    </span>
                  )}
                  {groupSize && (
                    <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-sm">
                      <FaUsers className="mr-1 text-xs" />
                      {groupSize}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Price and Booking Section */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 sm:p-4 flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-baseline">
              <span className="text-xl md:text-2xl font-bold text-orange-600">
                {price}
              </span>
              {priceOld && (
                <span className="ml-2 text-xs text-gray-500 line-through">
                  {priceOld}
                </span>
              )}
              {priceOld && (
                <span className="ml-2 bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full text-xs font-bold">
                  SAVE{" "}
                  {Math.round(
                    ((parseFloat(priceOld.replace(/[^0-9.]/g, "")) -
                      parseFloat(price.replace(/[^0-9.]/g, ""))) /
                      parseFloat(priceOld.replace(/[^0-9.]/g, ""))) *
                      100
                  )}
                  %
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {rating && (
                <div className="flex items-center bg-white px-2 py-1 rounded-lg shadow-sm">
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < Math.floor(rating)
                            ? "text-yellow-400"
                            : "text-gray-200"
                        } w-3 h-3`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-700 text-xs">
                    {rating}
                  </span>
                  {reviews && (
                    <span className="text-gray-500 ml-0.5 text-xs">
                      ({reviews})
                    </span>
                  )}
                </div>
              )}

              <a
                href="https://api.whatsapp.com/send?phone=201062892767"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md text-xs"
              >
                <FaWhatsapp className="mr-1" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2">
            {/* Overview Section - Much Larger and more prominent */}
            {overview && (
              <div className="mb-10 bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaInfoCircle className="text-orange-500 mr-3 text-2xl" />
                  Overview
                </h2>
                <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed text-lg">
                  {overview.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-5 font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Tour Highlights Section */}
            {Object.keys(tourHighlights).length > 0 && (
              <div className="mb-8 bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaStar className="text-orange-500 mr-2" />
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(tourHighlights).map(([key, value], i) => (
                    <div
                      key={i}
                      className="flex items-start p-3 bg-orange-50 rounded-lg"
                    >
                      <div className="bg-orange-500 text-white p-1.5 rounded-full mr-2.5 flex-shrink-0">
                        <FaCheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}:{" "}
                        </p>
                        <p className="text-gray-700 text-sm mt-1">
                          {value.split("\n").map((line, j) => (
                            <span key={j} className="block mb-1">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights Section (from top-level data) */}
            {highlights && highlights.length > 0 && (
              <div className="mb-8 bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaStar className="text-orange-500 mr-2" />
                  Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start p-3 bg-orange-50 rounded-lg"
                    >
                      <div className="bg-orange-500 text-white p-1.5 rounded-full mr-2.5 flex-shrink-0">
                        <FaCheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary Section */}
            {itinerary && itinerary.length > 0 && (
              <div className="mb-8 bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaRoute className="text-orange-500 mr-2" />
                  Tour Itinerary
                </h2>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-orange-200"></div>

                  {/* Itinerary steps */}
                  <div className="space-y-6 relative">
                    {itinerary.map((item, i) => (
                      <div key={i} className="ml-10 relative">
                        {/* Timeline dot */}
                        <div className="absolute -left-10 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                          {i + 1}
                        </div>

                        {/* Content */}
                        <div className="bg-orange-50 rounded-lg p-3">
                          <h3 className="font-bold text-base text-gray-800 mb-2">
                            {item.step}
                          </h3>
                          <div className="text-gray-700 text-sm">
                            {item.description
                              .split("\n")
                              .map((paragraph, j) => (
                                <p key={j} className="mb-2">
                                  {paragraph}
                                </p>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* What to Bring Section */}
            {finalWhatToBring && (
              <div className="mb-8 bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaShieldAlt className="text-orange-500 mr-2" />
                  What to Bring
                </h2>
                <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed text-sm">
                  {finalWhatToBring.split("\n").map((item, i) => {
                    if (item.trim().startsWith("-")) {
                      return (
                        <div key={i} className="flex items-start mb-2.5">
                          <div className="bg-blue-100 text-blue-500 p-1 rounded-full mr-2.5 mt-0.5 flex-shrink-0">
                            <FaCheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span>{item.trim().substring(1).trim()}</span>
                        </div>
                      );
                    }
                    return (
                      <p key={i} className="mb-3">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Photo Gallery Grid */}
            {gallery.length > 0 && (
              <div className="mb-8 bg-white rounded-xl shadow-md p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaCamera className="text-orange-500 mr-2" />
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-32 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                    >
                      <Image
                        src={img}
                        alt={`${title} gallery image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Booking Info */}
            {bookingInfo && (
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-5 text-white">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  Booking Information
                </h3>
                <div className="prose prose-invert max-w-none text-sm">
                  {bookingInfo.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=201062892767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 mt-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-md text-sm"
                >
                  <FaWhatsapp className="mr-2 text-green-500" />
                  Book via WhatsApp
                </a>
              </div>
            )}

            {/* Price Details */}
            {pricing && (
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <FaMoneyBillWave className="text-green-500 mr-2" />
                  Price Details
                </h3>
                <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed text-sm">
                  {pricing.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included */}
            {finalIncludes && finalIncludes.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-2.5">
                  {typeof finalIncludes === "string"
                    ? finalIncludes
                        .split("\n")
                        .filter((item) => item.trim())
                        .map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-green-100 text-green-500 p-1 rounded-full mr-2.5 mt-0.5 flex-shrink-0">
                              <FaCheckCircle className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-gray-700 text-sm">
                              {item.replace(/^-/, "").trim()}
                            </span>
                          </li>
                        ))
                    : finalIncludes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-green-100 text-green-500 p-1 rounded-full mr-2.5 mt-0.5 flex-shrink-0">
                            <FaCheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
