import React from "react";

const links = [
  { link: "About Me", section: "#aboutMe" },
  { link: "Experience", section: "#experience" },
  { link: "Projects", section: "#project" },
  { link: "Contact Me", section: "#contactMe" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col text-center font-bold text-xl text-blue4 absolute gap-6 py-4 left-[50%] top-[120%] -translate-x-[50%] bg-blue1/95 w-full md:relative md:flex-row md:text-2xl md:font-normal md:gap-12 md:top-[0%] md:bg-transparent">
      {links.map((link, index) => {
        return (
          <li key={index} className="">
            <a href={link.section}>{link.link}</a>
            <div className=""></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
