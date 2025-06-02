import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const FooterText = () => {
  return (
    <div className="flex">
      <div className="mt-8 mx-4 text-lightGrey">
        <div className="text-lightGrey text-[10px] text-center">
          Personal Profile site built using technologies
          <br />
          React, TailwindCSS, and hosted by Github
          <br />
        </div>
        <div className="flex gap-4 text-2xl mt-2 justify-center items-center">
          <FaReact />
          <RiTailwindCssFill />
          <SiVite />
          <FaGithub />
        </div>
        <div className="text-[10px] mt-2">
          Project hosted on Github Pages and available in Github
        </div>
      </div>
      <div className="mt-8 mx-auto">
        <FooterLinks />
      </div>
    </div>
  );
};

export default FooterText;
