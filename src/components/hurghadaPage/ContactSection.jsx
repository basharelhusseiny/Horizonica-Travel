import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="mt-20 bg-gradient-to-r from-blue-200 to-orange-200 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Book Your Hurghada Adventure?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Contact us now to plan your perfect excursion in Hurghada. Our team is
          ready to help you create unforgettable memories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <FaWhatsapp className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
          <p className="text-gray-600 mb-4">
            Chat with us directly for quick responses
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=201062892767"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline"
          >
            +20 106 289 2767
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
          <a
            href="tel:01066404815"
            className="text-blue-600 font-medium hover:underline"
          >
            0106 640 4815
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <FaEnvelope className="text-orange-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600 mb-4">Send us your inquiries anytime</p>
          <a
            href="mailto:info@horizonica-travel.com"
            className="text-orange-600 font-medium hover:underline"
          >
            info@horizonica-travel.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
