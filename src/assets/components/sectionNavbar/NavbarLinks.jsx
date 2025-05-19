import React from "react";

const links = [
  { link: "About Me", section: "about me" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-12 text-2xl text-center">
      {links.map((link, index) => {
        return (
          <li key={index} className="">
            <a href="#">{link.link}</a>
            <div className=""></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
