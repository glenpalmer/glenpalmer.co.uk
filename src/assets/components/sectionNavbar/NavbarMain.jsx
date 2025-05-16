import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1280px] mx-auto w-full px-4 mt-2 fixed left-[50%] -translate-x-[50px] flex z-20">
      <div className="border flex justify-between max-w-[1180px] mx-auto items-center">
        <NavbarLogo />
        <div>
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
