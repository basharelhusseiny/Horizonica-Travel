import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCreditCard,
  FaLock,
  FaShieldAlt,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-orange-500">Horizonica</span> Travel
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              Discover the beauty of Egypt with our expertly crafted tours in
              Hurghada and Sharm El Sheikh. Unforgettable experiences await with
              our local guides.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Tours & Excursions", href: "/tours" },
                { name: "Blog", href: "/blog" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-orange-500 text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Popular Tours
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              {[
                {
                  name: "Desert Safari Adventures",
                  href: "/tours/desert-safari",
                },
                { name: "Red Sea Snorkeling Tours", href: "/tours/snorkeling" },
                { name: "Luxor Day Trip", href: "/tours/luxor" },
                {
                  name: "Ras Mohammed National Park",
                  href: "/tours/ras-mohammed",
                },
                { name: "Cairo Pyramids Tour", href: "/tours/cairo-pyramids" },
              ].map((tour, index) => (
                <li key={index}>
                  <Link
                    href={tour.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center"
                  >
                    <FaChevronRight className="mr-2 text-orange-500 text-xs" />
                    {tour.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <span className="text-gray-300">
                  123 Tourism Street, Hurghada, Red Sea Governorate, Egypt
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-orange-500 mr-3" />
                <a
                  href="tel:+201062892767"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  +20 106 289 2767
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <a
                  href="mailto:info@horizonica.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  info@horizonica.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="text-orange-500 mr-3" />
                <span className="text-gray-300">
                  Open daily: 8:00 AM - 8:00 PM
                </span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <FaCreditCard className="text-3xl text-orange-400 mb-2" />
              <h4 className="text-sm font-semibold">Secure Payment</h4>
              <p className="text-xs text-gray-400">Multiple payment options</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLock className="text-3xl text-orange-400 mb-2" />
              <h4 className="text-sm font-semibold">Safe Booking</h4>
              <p className="text-xs text-gray-400">Encrypted transaction</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-3xl text-orange-400 mb-2" />
              <h4 className="text-sm font-semibold">Best Price Guarantee</h4>
              <p className="text-xs text-gray-400">No hidden fees</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-3xl text-orange-400 mb-2" />
              <h4 className="text-sm font-semibold">Verified Reviews</h4>
              <p className="text-xs text-gray-400">From real travelers</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {2025}{" "}
            <span className="text-orange-500 font-semibold">
              Horizonica Travel
            </span>
            . All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with ❤️ for travelers exploring Egypt's wonders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
