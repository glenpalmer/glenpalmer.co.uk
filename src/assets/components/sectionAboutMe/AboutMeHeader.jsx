import React from "react";
import AboutMeImage from "./AboutMeImage";
import graphicSofaChat from "../../../../public/images/graphicSofaChat.png";

const AboutMeHeader = () => {
  return (
    <div className="flex flex-col w-full justify-start md:justify-center md:flex-row">
      <div>
        <img
          src={graphicSofaChat}
          className="relative w-[132px] h-[135px] mx-auto md:absolute md:w-[188px] md:h-[193px] md:right-0 md:mr-4"
        />
      </div>
      <div className="pt-6 pb-6 ml-4">
        <h2 className="text-xl text-center md:text-2xl">
          Getting to know a little more
        </h2>
        <h1 className="text-3xl text-center font-bold md:text-4xl">About Me</h1>
      </div>
    </div>
  );
};

export default AboutMeHeader;
