import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-60 pb-60">
      {/*<div className="relative flex max-w-[1180px] mx-auto justify-between items-center px-8">*/}
      <div className="relative flex flex-col justify-center md:flex-row md:justify-around">
        <div className="md:translate-x-[50%]">
          <HeroText />
        </div>
        <div className="mt-10 md:mt-0">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
