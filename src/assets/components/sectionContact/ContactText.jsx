import React from "react";
import graphicMobile from "../../../../public/images/graphicMobile.png";
import { FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const ContactText = () => {
  return (
    <div className="flex relative w-full justify-center mt-2">
      <div>
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
