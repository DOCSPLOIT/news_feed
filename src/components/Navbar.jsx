import React, { useContext, useState } from "react";
import { ScreenContext } from "../App";
import Logo from "../assets/logo.svg";
import BreadCrumps from "../assets/icon-menu.svg";
import Close from "../assets/icon-menu-close.svg";
export default function Navbar() {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  const sizeCtx = useContext(ScreenContext).size;
  const [show, setShow] = useState(false);
  return (
    <nav className="m-auto flex md:flex items-center s w-4/5 py-2 mb-12 px-5  ">
      <img alt="logo" src={Logo} className="pt-20" />
      {sizeCtx > 375 ? (
        <ul className="md:flex self-end  hidden  ml-auto pb-2 space-x-10 ">
          {navItems.map((itm) => (
            <li key={itm}>
              <a
                href={`#${itm}`}
                className="text-[#706b80] hover:text-[#f15e50]"
              >
                {itm}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <nav className="self-end pb-2 cursor-pointer ml-auto">
          <img
            onClick={() => setShow(true)}
            src={BreadCrumps}
            alr="bread_crump"
          />
        </nav>
      )}
      {show && (
        <header className="absolute md:hidden w-screen h-screen  bg-black/50 top-0 left-0 ">
          <div className="h-full w-3/4 ml-auto opacity-100 bg-white">
            <img
              onClick={() => setShow(false)}
              src={Close}
              className="pt-5 ml-auto cursor-pointer px-5"
            />
            <ul className=" ml-6 pb-2 space-y-15 mt-16 ">
              {navItems.map((itm) => (
                <li key={itm} className="my-5">
                  <a
                    href={`#${itm}`}
                    className="text-[#14083b] text-2xl hover:text-[#f15e50]"
                  >
                    {itm}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>
      )}
    </nav>
  );
}
