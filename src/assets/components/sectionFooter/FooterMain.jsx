import React from "react";
import FooterText from "./FooterText";
import FooterLinks from "./FooterLinks";

const FooterMain = () => {
  return (
    <div className="bg-blue5">
      <div className="max-w-[1180px] mx-auto pb-10 justify-center">
        <FooterText />
      </div>
    </div>
  );
};

export default FooterMain;
