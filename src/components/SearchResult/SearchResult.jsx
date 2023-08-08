import React, { useContext } from "react";
import ArtDetail from "../SearchResult/ArtDetail.jsx";
import { ArtContext } from "../../ArtContext";

function SearchResult() {
  //yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  const { artList } = useContext(ArtContext);

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
      {shuffleArray([...artList]).map((art, index) => (
        <div className="art-container" key={index}>
          <ArtDetail art={art} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
