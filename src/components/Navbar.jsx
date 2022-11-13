import React from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <nav className="m-auto flex md:flex items-center s w-4/5 py-2 mb-12 px-5  ">
      <img alt="logo" src={Logo} className="pt-20" />
      <ul className="flex self-end   ml-auto pb-2 space-x-10 ">
        {navItems.map((itm) => (
          <li key={itm}>
            <a href={`#${itm}`} className="text-[#706b80] hover:text-[#f15e50]">
              {itm}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
