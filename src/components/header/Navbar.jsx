"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ navLinks, locale }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-between gap-8 font-bold capitalize">
        {navLinks.map((link) => {
          const fullHref = `/${locale}${link.href}`;

          const isActive =
            pathname === fullHref ||
            (link.href === "/" && pathname === `/${locale}`);

          return (
            <li key={link.id}>
              <Link
                href={fullHref}
                className={`${
                  isActive ? "text-orange-600" : "text-black"
                } text-lg hover:text-orange-600 duration-300`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
