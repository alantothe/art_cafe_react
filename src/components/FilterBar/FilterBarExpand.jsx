import React from "react";
import { useContext } from "react";
import { ArtContext } from "../../ArtContext.jsx";
function FilterBarExpand() {
  const art = useContext(ArtContext);

  console.log("Artist:" + art.artist);

  return (
    <div
      className=" h-2 border-t border-[#eee9e5] pt-5"
      style={{
        backgroundColor: "#fdf7f3",
      }}
    ></div>
  );
}

export default FilterBarExpand;
