"use client";
import { useMobileMenu } from "@/context/MobileMenuContext";
import CloseButton from "@/ui/CloseButton";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileMenuToggle = () => {
  const { isMobMenuOpen, setIsMobMenuOpen } = useMobileMenu();

  return (
    <div className="block lg:hidden">
      {isMobMenuOpen ? (
        <CloseButton onClick={() => setIsMobMenuOpen(false)} />
      ) : (
        <RxHamburgerMenu
          size={27}
          onClick={() => setIsMobMenuOpen(true)}
          className="hover:text-orange-600 cursor-pointer duration-300"
        />
      )}
    </div>
  );
};

export default MobileMenuToggle;
