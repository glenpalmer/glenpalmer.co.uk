import React from "react";
import HeroLinks from "./HeroLinks";

const HeroCallToAction = () => {
  return (
    <div className="border flex justify-center gap-6">
      <div className="h-8 w-[100px] rounded-4xl bg-blue2 items-center text-xs justify-center flex text-white">
        Download CV
      </div>
      <div className=" border-2 border-blue2 border-width h-8 w-[100px] rounded-2xl text-xs items-center justify-center flex text-blue3">
        Contact Me
      </div>
      <div className="flex">
        <HeroLinks />
      </div>
    </div>
  );
};

export default HeroCallToAction;
