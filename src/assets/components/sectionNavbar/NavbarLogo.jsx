import React from "react";
import { SiOracle } from "react-icons/si";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <SiOracle className="text-red-600 text-4xl" />
      </div>
      <div>
        <a href="#">
          <h1 className="text-3xl uppercase">Glen Palmer</h1>
        </a>
      </div>
    </div>
  );
};

export default NavbarLogo;
