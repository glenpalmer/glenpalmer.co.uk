import React from "react";
import ContactImage from "./ContactImage";

const ContactHeader = () => {
  return (
    <div className="flex flex-col w-full justify-start md:flex-row md:justify-center">
      <div className="relative w-[130px] h-[167px] mx-auto md:absolute md:w-[185px] md:h-[238px] md:right-0 md:mr-4">
        <ContactImage />
      </div>
      <div className="pt-6 pb-6">
        <h2 className="text-xl text-center">Want to get in touch</h2>
        <h1 className="text-3xl text-center font-bold">Contact Me</h1>
      </div>
    </div>
  );
};

export default ContactHeader;
