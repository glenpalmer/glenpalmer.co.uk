import React from "react";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const FooterText = () => {
  return (
    <div className="flex justify-around">
      <div className="mt-8 text-lightGrey">
        <div className="text-lightGrey text-sm text-center">
          Personal Profile built using technologies React, TailwindCSS and Vite
          <br />
          Project hosted on GitHub Page and available on GitHub
        </div>
        <div className="flex gap-4 text-4xl justify-center mt-2">
          <FaReact />
          <RiTailwindCssFill />
          <SiVite />
          <FaGithub />
        </div>
      </div>
      <div className="mt-8">
        <FooterLinks />
      </div>
    </div>
  );
};

export default FooterText;
