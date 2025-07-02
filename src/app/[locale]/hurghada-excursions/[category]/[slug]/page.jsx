import { excursionsData } from "@/data/excursions";
import Image from "next/image";

const Page = async ({ params }) => {
  const { slug, category } = params;
  const excursions = excursionsData[category];
  const tour = excursions.find((tour) => tour.slug === slug);

  if (!tour) return <div className="text-center text-red-500">Tour not found</div>;

  const {
    title,
    description,
    mainImage,
    gallery,
    price,
    priceOld,
    duration,
    location,
    groupSize,
    rating,
    longDescription,
  } = tour;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">{title}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Main Image */}
   <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[450px]">
  <Image
    src={mainImage}
    alt={title}
    fill
    className="object-cover"
  />
</div>


      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {gallery.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Gallery image ${i + 1}`}
            width={600}
            height={400}
            className="rounded-lg object-cover h-40 w-full"
          />
        ))}
      </div>

      {/* Info Badges */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">{duration}</span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{location}</span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">{groupSize}</span>
        {rating && (
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">⭐ {rating} / 5</span>
        )}
      </div>

      {/* Sections */}
      {Object.entries(longDescription).map(([section, content]) => (
        <div key={section} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize mb-2">
            {section.replace(/([A-Z])/g, " $1").trim()}
          </h2>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://api.whatsapp.com/send?phone=201062892767"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
        >
          Book Now on WhatsApp
        </a>
      </div>
    </div>  
  );
};

export default Page;
