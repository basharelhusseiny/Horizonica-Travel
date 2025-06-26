"use client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  FaHome,
  FaPlane,
  FaBlog,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const MobileMenu = ({ navLinks, locale }) => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuItems = menuRef.current.querySelectorAll(".menu-item");
    const bookButton = menuRef.current.querySelector(".book-button");
    const backdrop = document.querySelector(".menu-backdrop");
    const menu = document.querySelector(".mobile-menu");

    if (isMobMenuOpen) {
      backdrop?.classList.add("open");
      menu?.classList.add("open");

      setTimeout(() => {
        menuItems.forEach((item) => item.classList.add("visible"));
        bookButton?.classList.add("visible");
      }, 100);
    } else {
      backdrop?.classList.remove("open");
      menu?.classList.remove("open");
      menuItems.forEach((item) => item.classList.remove("visible"));
      bookButton?.classList.remove("visible");
    }
  }, [isMobMenuOpen]);

  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "home":
        return <FaHome className="mr-2" />;
      case "tours":
        return <FaPlane className="mr-2" />;
      case "blog":
        return <FaBlog className="mr-2" />;
      case "about":
        return <FaInfoCircle className="mr-2" />;
      case "contact":
        return <FaEnvelope className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div ref={menuRef}>
      <div
        className={`menu-backdrop fixed z-[49] right-0 top-[64px] bg-black/60 w-full h-[100dvh] duration-500 transition-all ${
          isMobMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobMenuOpen(false)}
      />

      <div
        className={`mobile-menu fixed z-[50] right-0 top-[58px] h-[100dvh] bg-gradient-to-b to-orange-100 from-white w-[280px] shadow-xl duration-500 transition-transform ${
          isMobMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="text-center mb-8 pt-4">
            <h3 className="text-orange-700 text-xl font-bold">Menu</h3>
            <div className="mt-2 h-1 w-16 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <div key={link.id} className="menu-item">
                <Link
                  href={`/${locale}${link.href}`}
                  onClick={() => setIsMobMenuOpen(false)}
                  className="flex items-center text-orange-600 hover:text-white capitalize font-medium text-lg py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                  {getIcon(link.title)}
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 mx-auto">
            <Link
              href={`/${locale}/tours`}
              onClick={() => setIsMobMenuOpen(false)}
              className="book-button text-base text-white bg-gradient-to-l from-orange-700 to-orange-400 hover:from-orange-400 hover:to-orange-700 font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
