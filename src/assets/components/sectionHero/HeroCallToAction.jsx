import React from "react";
import HeroLinks from "./HeroLinks";

const HeroCallToAction = () => {
  return (
    /*    <div className="border flex justify-center gap-6">
      <div className="h-8 w-[100px] rounded-4xl bg-blue2 items-center text-xs justify-center flex text-white">
        Download CV
      </div>
      <div className=" border-2 border-blue2 border-width h-8 w-[100px] rounded-2xl text-xs items-center justify-center flex text-blue3">
        Contact Me
      </div>
      <div className="border">
        <HeroLinks />
      </div>
    </div>*/
    <div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
        <div className="flex items-center justify-center border border-blue2 bg-blue2 h-8 w-[120px] rounded-2xl text-xs text-white">
          <a href="GlenPalmer_CV_20250314.pdf" download>
            Download CV
          </a>
        </div>
        <div className="flex items-center justify-center border border-blue2 h-8 w-[120px] rounded-2xl text-xs text-blue2">
          <a href="#contactMe">Contact Me</a>
        </div>
      </div>
      <div>
        <HeroLinks />
      </div>
    </div>
  );
};

export default HeroCallToAction;
