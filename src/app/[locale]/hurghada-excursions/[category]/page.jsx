import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import { excursionsData } from "@/data/excursions";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { category } = await params;

  const categoryTitles = {
    "desert-safari":
      "Desert Safari Tours in Hurghada | Quad Biking & Bedouin Village",
    "sea-trips": "Best Sea Trips in Hurghada | Snorkeling & Dolphin House",
    "luxor-day-trips":
      "Luxor Day Trips from Hurghada | Valley of Kings & Karnak Temple",
    "cairo-pyramids-tour":
      "Cairo & Pyramids Tour from Hurghada | Giza Pyramids & Sphinx",
  };

  const categoryDescriptions = {
    "desert-safari":
      "Experience thrilling desert safari tours in Hurghada with quad biking, buggy rides, and Bedouin village visits. Book your adventure with Horizonica Travel.",
    "sea-trips":
      "Discover the best sea trips in Hurghada including Dolphin House, Paradise Island, and Orange Bay. Enjoy snorkeling in the Red Sea with Horizonica Travel.",
    "luxor-day-trips":
      "Explore ancient Egypt with our Luxor day trips from Hurghada. Visit Valley of Kings, Karnak Temple, and Hatshepsut Temple with expert guides.",
    "cairo-pyramids-tour":
      "Book a Cairo and Pyramids tour from Hurghada to see the Giza Pyramids, Sphinx, and Egyptian Museum with comfortable transfers and expert guides.",
  };

  return {
    title:
      categoryTitles[category] ||
      `${category.split("-").join(" ")} | Hurghada Excursions`,
    description:
      categoryDescriptions[category] ||
      `Explore the best ${category
        .split("-")
        .join(" ")} in Hurghada with Horizonica Travel.`,
    keywords: `Hurghada ${category
      .split("-")
      .join(" ")}, Egypt tours, Red Sea excursions, ${category
      .split("-")
      .join(" ")} booking, Horizonica Travel`,
    openGraph: {
      title:
        categoryTitles[category] ||
        `${category.split("-").join(" ")} | Hurghada Excursions`,
      description:
        categoryDescriptions[category] ||
        `Explore the best ${category
          .split("-")
          .join(" ")} in Hurghada with Horizonica Travel.`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `/images/${category}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.split("-").join(" ")} in Hurghada`,
        },
      ],
    },
  };
}

const ExcursionsCategory = async ({ params }) => {
  const { category } = await params;
  const excursions = excursionsData[category];

  // Category title mapping
  const categoryTitles = {
    "desert-safari": "Desert Safari Tours",
    "sea-trips": "Sea Trips & Snorkeling",
    "luxor-day-trips": "Luxor Day Trips",
    "cairo-pyramids-tour": "Cairo & Pyramids Tours",
  };

  // Category description mapping
  const categoryDescriptions = {
    "desert-safari":
      "Experience the thrill of the desert with our top-rated safari tours from Hurghada. Enjoy quad biking, camel rides, and authentic Bedouin experiences.",
    "sea-trips":
      "Discover the magical underwater world of the Red Sea with our snorkeling trips and boat excursions from Hurghada.",
    "luxor-day-trips":
      "Travel back in time with our day trips from Hurghada to Luxor. Explore ancient temples, tombs, and the rich history of Egypt.",
    "cairo-pyramids-tour":
      "Visit the iconic Pyramids of Giza and explore Cairo's treasures with our comfortable day trips from Hurghada.",
  };

  return (
    <>
      {/* Category Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-orange-600 py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryTitles[category] || category.split("-").join(" ")}
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              {categoryDescriptions[category] ||
                `Explore our ${category
                  .split("-")
                  .join(" ")} excursions in Hurghada.`}
            </p>
          </div>
        </div>
      </div>

      {/* Excursions List */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((tour, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
              itemScope
              itemType="https://schema.org/TouristAttraction"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={tour.mainImage}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    itemProp="image"
                  />
                  <meta itemProp="name" content={tour.title} />
                </div>

                {/* Duration Badge */}
                {tour.duration && (
                  <div className="absolute top-4 left-0 z-10">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-r-lg text-sm font-medium flex items-center shadow-lg transform group-hover:translate-x-1 transition-transform duration-300">
                      <FaClock className="mr-2" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                )}

                {/* Special Offer Badge if price has discount */}
                {tour.priceOld && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
                      SPECIAL OFFER
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-white via-white to-orange-50">
                {/* Title - Moved here from image overlay */}
                <h2
                  className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300"
                  itemProp="name"
                >
                  {tour.title}
                </h2>

                {/* Tour Details */}
                <div className="mb-4 flex flex-wrap gap-2 text-sm">
                  {tour.location && (
                    <div
                      className="flex items-center text-gray-700 bg-orange-100 px-3 py-1.5 rounded-full"
                      itemProp="location"
                    >
                      <FaMapMarkerAlt className="mr-2 text-orange-500" />
                      <span className="font-medium">{tour.location}</span>
                    </div>
                  )}
                  {tour.groupSize && (
                    <div className="flex items-center text-gray-700 bg-blue-100 px-3 py-1.5 rounded-full">
                      <FaUsers className="mr-2 text-blue-500" />
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div
                  className="text-gray-600 mb-5 flex-grow"
                  itemProp="description"
                >
                  <p className="line-clamp-3">{tour.description}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-5"></div>

                {/* Price and Rating Section */}
                <div className="flex items-center justify-between mb-5">
                  {/* Price */}
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-semibold">Price</span>
                    <div className="flex items-baseline">
                      {tour.priceOld && (
                        <span className="text-gray-400 text-sm line-through mr-2">
                          {tour.priceOld}
                        </span>
                      )}
                      <span
                        className="text-orange-600 font-bold text-2xl"
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/Offer"
                      >
                        <meta itemProp="priceCurrency" content="USD" />
                        <span itemProp="price">{tour.price}</span>
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  {tour.rating && (
                    <div
                      className="flex flex-col items-end"
                      itemProp="aggregateRating"
                      itemScope
                      itemType="https://schema.org/AggregateRating"
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < Math.floor(tour.rating)
                                ? "text-yellow-400"
                                : "text-gray-200"
                            } w-4 h-4`}
                          />
                        ))}
                      </div>
                      <div className="text-gray-600 text-sm mt-1">
                        <span className="font-bold" itemProp="ratingValue">
                          {tour.rating}
                        </span>
                        <meta itemProp="bestRating" content="5" />
                        {tour.reviews && (
                          <>
                            <span className="text-gray-500 ml-1">
                              ({tour.reviews})
                            </span>
                            <meta
                              itemProp="reviewCount"
                              content={tour.reviews}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/hurghada-excursions/${category}/${tour.slug}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-orange-300/50"
                >
                  View Details
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Book Your{" "}
            {categoryTitles[category] || category.split("-").join(" ")}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Contact us now to reserve your spot or customize your experience.
            Our team is ready to help you plan the perfect excursion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=201062892767"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcursionsCategory;
