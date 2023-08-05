import React from "react";

import { NavLink } from "react-router-dom";

function NavBar() {
  const handleHover = () => {};

  return (
    <div className="bg-black m-0 flex flex-row justify-stretch ">
      <div id="left" className="w-1/2 flex flex-col">
        <h1 className="text-white text-start ml-4 pt-5 pl-3 font-serif text-2xl">
          GENERAL ASSEMBLY
        </h1>
        <h1 className="text-orange-600 text-start ml-5 pb-5 pl-2 font-serif font-thin text-4xl">
          ART MUSEUM
        </h1>
      </div>
      <div id="right" className="w-1/2 flex flex-row pb-5 pt-5 ">
        <NavLink
          to="/"
          className="text-white hover:text-orange-500 text-start ml-5 pt-5 pl-2 font-mono font-bold text-xl"
        >
          HOME
        </NavLink>
        <NavLink
          to="https://generalassemb.ly/"
          className="text-white hover:text-orange-500 text-start ml-5 pt-5 pl-2 font-mono font-bold text-xl"
        >
          VISIT
        </NavLink>
        <NavLink
          to="/submit"
          className="text-white hover:text-orange-500 text-start ml-5 pt-5 pl-2 font-mono font-bold text-xl"
        >
          SUBMIT
        </NavLink>
        <NavLink
          to="https://generalassemb.ly/about"
          className="text-white hover:text-orange-500 text-start ml-5 pt-5 pl-2 font-mono font-bold text-xl"
        >
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
