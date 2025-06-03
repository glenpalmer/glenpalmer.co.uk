import React from "react";

const FooterLinks = () => {
  return (
    <div className="text-lightGrey text-[12px] md:text-2xl">
      <ul className="flex flex-row gap-4 md:gap-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
