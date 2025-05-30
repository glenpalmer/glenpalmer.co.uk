import React from "react";
import graphicMobile from "../../../../public/images/graphicMobile.png";
import { FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const ContactText = () => {
  return (
    <div className="flex relative w-full justify-center">
      <div>
        <img
          src={graphicMobile}
          className="absolute left-0 h-[240px] w-[188px] z-0"
        />
      </div>
      <div>
        <div className="flex flex-col pt-6 pb-6">
          <h2 className="text-2xl text-center">Get in touch</h2>
          <h1 className="text-4xl text-center font-bold">Contact Me</h1>
        </div>
        <div>
          <div className="flex flex-row items-center mb-4">
            <div>
              <a
                href="https://www.linkedin.com/in/glen-palmer-b4164723/"
                target="_blank"
              >
                <FaLinkedin className="text-4xl text-blue3" />
              </a>
            </div>
            <div className="ml-4 font-bold">
              <a
                href="https://www.linkedin.com/in/glen-palmer-b4164723/"
                target="_blank"
              >
                Glen Palmer
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div>
              <a href="mailto:glen.palmer@hotmail.co.uk">
                <ImMail4 className="text-4xl text-blue3" />
              </a>
            </div>
            <div className="ml-4 font-bold">
              <a href="mailto:glen.palmer@hotmail.co.uk">
                glen.palmer@hotmail.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
