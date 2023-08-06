import React from "react";
import { useContext } from "react";
import { ArtContext } from "../../../../ArtContext";
import ArtistDetail from "./ArtistDetail.jsx";
function ArtistResult() {
  const artList = useContext(ArtContext);

  function removeDuplicatesAndAddCount(art) {
    //create array of artist names
    const artistArray = art.map((artItem) => artItem.artist);
    //remove duplicates with new Set
    const uniqueArtistArray = [...new Set(artistArray)];
    //create array of objects with artist name and count
    const artistCount = uniqueArtistArray.map((artist) => {
      return {
        artist: artist,
        count: artistArray.filter((artistName) => artistName === artist).length,
      };
    });
    return artistCount;
  }

  const artistCountArray = removeDuplicatesAndAddCount(artList);

  return (
    <div
      className="grid grid-cols-4 gap-x-8 gap-y-4 px-40 border-t border-[#eee9e5] pt-5 overflow-y-auto"
      style={{
        backgroundColor: "#fdf7f3",
        maxHeight: "300px",
      }}
    >
      {artistCountArray.map((artistCountItem) => (
        <div className="art-container" key={artistCountItem.artist}>
          <ArtistDetail art={artistCountItem} />
        </div>
      ))}
    </div>
  );
}

export default ArtistResult;
