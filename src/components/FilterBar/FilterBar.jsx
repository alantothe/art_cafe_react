import React from "react";
import Artist from "./FilterBy/Artist/Artist.jsx";
import Culture from "./FilterBy/Culture";
import Date from "./FilterBy/Date";
import Period from "./FilterBy/Period";
import Type from "./FilterBy/Type";

function FilterBar() {
  return (
    <div
      className="flex flex-row justify-center items-center space-x-20 h-16 border-b border-[#eee9e5]"
      style={{
        backgroundColor: "#fdf7f3",
      }}
    >
      <label className="flex items-start font-extralight">Filter by:</label>
      <Artist />
      <Culture />
      <Date />
      <Period />
      <Type />
    </div>
  );
}

export default FilterBar;
