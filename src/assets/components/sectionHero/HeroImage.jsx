import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import profileImage from "/public/images/profileImageHero.png";

const HeroImage = () => {
  return (
    <div className="border border-yellow-500 h-full flex items-center justify-center">
      {/*<img src="../../public/images/profileImageHero.png" alt="Profile Image" />*/}
      <img
        src={profileImage}
        alt="Profile Image"
        className="w-60 h-60 rounded-full object-cover bg-radial-[at_50%_50%] from-white via-blue-200 to-blue1"
      />
    </div>
  );
};

export default HeroImage;
