import React from "react";
import ContactHeader from "./ContactHeader";
import ContactText from "./ContactText";

const ContactMain = () => {
  return (
    <div
      id="contactMe"
      className="relative flex flex-col max-w-[1280px] justify-center scroll-mt-40 mx-auto pb-40"
    >
      <ContactHeader />
      <ContactText />
    </div>
  );
};

export default ContactMain;
