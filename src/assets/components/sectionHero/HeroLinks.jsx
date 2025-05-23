import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const HeroLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div>
        <FaLinkedin className="text-4xl text-blue3" />
      </div>
      <div>
        <ImGithub className="text-4xl text-blue3" />
      </div>
    </div>
  );
};

export default HeroLinks;
