import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex fixed z-1 bg-white/85 max-w-[1280px] left-[50%] mx-auto w-full -translate-x-[50%] mt-4">
      <div className="max-w-[1180px] mx-auto w-full p-4 justify-between flex">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <NavbarLinks />
        </div>
        {/*        <div>
          <NavbarLinks />
        </div>*/}
        <div className="md:hidden">
          <button className="text-2xl text-red-500" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
