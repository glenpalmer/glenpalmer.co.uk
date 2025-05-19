import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const NavbarMain = () => {
  return (
    <nav className="fixed max-w-[1280px] left-[50%] mx-auto w-full -translate-x-[50%] mt-4 flex">
      <div className="max-w-[1180px] mx-auto w-full p-4 justify-between flex">
        <NavbarLogo />
        <div>
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
