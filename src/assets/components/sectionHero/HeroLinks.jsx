import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const HeroLinks = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <div>
        {" "}
        <a
          href="https://www.linkedin.com/in/glen-palmer-b4164723/"
          target="_blank"
        >
          <FaLinkedin className="text-4xl text-blue3" />
        </a>
      </div>
      <div>
        <a href="https://github.com/glenpalmer" target="_blank">
          <ImGithub className="text-4xl text-blue3" />
        </a>
      </div>
    </div>
  );
};

export default HeroLinks;
