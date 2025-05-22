import React from "react";
import HeroCallToAction from "./HeroCallToAction";

const HeroText = () => {
  return (
    <div className="border border-green-500 flex flex-col h-full gap-4 relative left-[25%]">
      <h2 className="text-2xl text-center">Hi, i'm</h2>
      <h1 className="text-4xl text-center font-bold">Glen Palmer</h1>
      <h2 className="text-2xl text-center">
        Senior Oracle HCM Cloud
        <br /> Applications Specialist
      </h2>
      <div className="boreder border-black">
        <div>
          <HeroCallToAction />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
