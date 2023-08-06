import React from "react";
import { useContext } from "react";
import { ArtContext } from "../../../../ArtContext";
import ArtistDetail from "./ArtistDetail.jsx";
function ArtistResult() {
  const art = useContext(ArtContext);

  return (
    <div
      className="grid grid-cols-4 gap-x-8 gap-y-4 px-40 border-t border-[#eee9e5] pt-5"
      style={{
        backgroundColor: "#fdf7f3",
      }}
    >
      {art.map((art) => (
        <div className="art-container" key={art.imageId}>
          <ArtistDetail art={art} />
        </div>
      ))}
    </div>
  );
}

export default ArtistResult;
