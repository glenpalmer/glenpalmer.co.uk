import React from "react";

const links = [
  { link: "About Me", section: "about me" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="border flex">
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
