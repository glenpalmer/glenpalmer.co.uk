import React from "react";
import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="border border-yellow-500 h-full flex items-center justify-center">
      <img src="../../public/images/profileImageHero.png" alt="Profile Image" />
      <div className="border border-red-500 absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroImage;
