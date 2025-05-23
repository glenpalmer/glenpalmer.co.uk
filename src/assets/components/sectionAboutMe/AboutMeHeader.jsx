import React from "react";
import AboutMeImage from "./AboutMeImage";
import graphicSofaChat from "../../../../public/images/graphicSofaChat.png";

const AboutMeHeader = () => {
  return (
    <div className="flex relative w-full justify-center">
      <div>
        <img
          src={graphicSofaChat}
          className="absolute right-0 h-[188px] w-[192px]"
        />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-2xl text-center">Getting to know a little more</h2>
        <h1 className="text-4xl text-center font-bold">About Me</h1>
      </div>
    </div>
  );
};

export default AboutMeHeader;
