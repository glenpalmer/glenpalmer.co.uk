import React from "react";
import graphicSofaChat from "../../../../public/images/graphicSofaChat.png";

const AboutMeImage = () => {
  return (
    <div>
      <img
        src={graphicSofaChat}
        className="absolute right-0 h-[188px] w-[192px]"
      />
    </div>
  );
};

export default AboutMeImage;
