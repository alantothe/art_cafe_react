import React, { useState, useEffect, useContext } from "react";
import { ArtContext } from "../../../../ArtContext";
import ArtistDetail from "./ArtistDetail.jsx";
import { getArtist } from "../../../../api/art";

function ArtistResult() {
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [uniqueArtists, setUniqueArtists] = useState([]);
  const { artList, setArtList, originalArtList } = useContext(ArtContext);

  useEffect(() => {
    setUniqueArtists(removeDuplicatesAndAddCount(artList));
  }, [artList]);

  useEffect(() => {
    if (selectedArtists.length > 0) {
      async function fetchArtistData(artistNames) {
        const artistData = await Promise.all(
          artistNames.map((name) => getArtist(name))
        );
        const combinedData = artistData.flat();
        if (Array.isArray(combinedData)) {
          setArtList(combinedData);
        } else {
          console.error("Fetched data is not in the expected format");
        }
      }
      fetchArtistData(selectedArtists);
    }
  }, [selectedArtists]);

  function removeDuplicatesAndAddCount(art) {
    const artistArray = art.map((artItem) => artItem.artist);
    const uniqueArtistArray = [...new Set(artistArray)];
    return uniqueArtistArray.map((artist) => ({
      artist,
      count: artistArray.filter((artistName) => artistName === artist).length,
    }));
  }

  const handleArtistClick = (artistName, isChecked) => {
    let newSelectedArtists;
    if (isChecked) {
      newSelectedArtists = [...selectedArtists, artistName];
    } else {
      newSelectedArtists = selectedArtists.filter((a) => a !== artistName);
    }
    setSelectedArtists(newSelectedArtists);

    const filteredArtworks = originalArtList.filter((art) =>
      newSelectedArtists.includes(art.artist)
    );
    setArtList(filteredArtworks.length ? filteredArtworks : originalArtList);
  };

  return (
    <div
      className="grid grid-cols-4 gap-x-8 gap-y-4 px-40 border-t border-[#eee9e5] pt-5 overflow-y-auto"
      style={{ backgroundColor: "#fdf7f3", maxHeight: "300px" }}
    >
      {uniqueArtists.map((artistCountItem) => (
        <div className="art-container" key={artistCountItem.artist}>
          <ArtistDetail
            art={artistCountItem}
            isChecked={selectedArtists.includes(artistCountItem.artist)}
            onArtistClick={handleArtistClick}
          />
        </div>
      ))}
    </div>
  );
}

export default ArtistResult;
