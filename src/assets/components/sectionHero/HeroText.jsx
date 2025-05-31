import React from "react";
import HeroCallToAction from "./HeroCallToAction";

const HeroText = () => {
  return (
    <div className="flex flex-col h-full w-full gap-4 relative md:mx-auto md:left-[0%]">
      <h2 className="text-xl text-center md:text-2xl">Hi, i'm</h2>
      <h1 className="text-3xl text-center font-bold md:text-4xl">
        Glen Palmer
      </h1>
      <h2 className="text-xl text-center md:text-2xl">
        Senior Oracle HCM Cloud
        <br /> Applications Specialist
      </h2>
      <div>
        <div>
          <HeroCallToAction />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
