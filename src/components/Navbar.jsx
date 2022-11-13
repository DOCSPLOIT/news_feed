import React from "react";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="m-auto flex md:flex items-center s w-4/5 py-2 mb-12 px-5  ">
      <img alt="logo" src={Logo} className="pt-20" />
      <ul className="flex self-end ml-auto pb-2 space-x-10 ">
        <li>
          <a className="" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="" href="#new">
            New
          </a>
        </li>
        <li>
          <a className="" href="#popular">
            Popular
          </a>
        </li>
        <li>
          <a className="" href="#trending">
            Trending
          </a>
        </li>
        <li>
          <a className="" href="#categories">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
}
