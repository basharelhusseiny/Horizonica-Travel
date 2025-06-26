"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { getDictionary } from "@/dictionaries";

const UserActions = ({ locale }) => {
  const [dropDownLang, setDropDownLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [bookNowText, setBookNowText] = useState("Book Now");
  const dropdownRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { name: "English", code: "en" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
    { name: "Deutsch", code: "de" },
  ];

  // ✅ Get current locale from pathname
  const currentLocale = pathname.split("/")[1];

  useEffect(() => {
    getDictionary(currentLocale || "en").then((dict) => {
      setBookNowText(dict?.hero?.bookNow || "Book Now");
    });
  }, [currentLocale]);

  // ✅ Set the selectedLang on first render
  useEffect(() => {
    const currentLang = languages.find((lang) => lang.code === currentLocale);
    if (currentLang) {
      setSelectedLang(currentLang.name);
    }
  }, [currentLocale]);

  // Remove locale prefix from current path
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/");
    return "/" + segments.slice(2).join("/"); // remove "", "locale"
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {/* Book Now Button */}
      <Link
        href="/tours"
        className="hidden sm:block text-base text-white bg-gradient-to-l from-orange-700 to-orange-400 hover:from-orange-400 hover:to-orange-700 font-medium px-4 py-2 rounded-lg transition-colors duration-300"
      >
        {bookNowText}
      </Link>

      {/* Language Selector */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropDownLang(!dropDownLang)}
          className="flex font-medium text-orange-800 items-center space-x-1 text-sm px-4 py-[10px] rounded-lg cursor-pointer bg-gradient-to-l from-orange-200 to-orange-50 hover:from-orange-50 hover:to-orange-200 transition-colors duration-300"
        >
          <FaGlobe className="mr-1" />
          <span className="hidden sm:block">{selectedLang}</span>
          <FaChevronDown
            className={`transition-transform duration-200 ${
              dropDownLang ? "rotate-180" : ""
            }`}
          />
        </button>

        {dropDownLang && (
          <div className="absolute z-50 right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.name);
                    setDropDownLang(false);
                    const newPath = `/${lang.code}${
                      getPathWithoutLocale() || ""
                    }`;
                    router.push(newPath);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm cursor-pointer ${
                    selectedLang === lang.name
                      ? "bg-orange-50 text-orange-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserActions;
