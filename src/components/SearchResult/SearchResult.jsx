import { useState, useEffect } from "react";
import { getArt } from "../../api/art";
import ArtDetail from "../SearchResult/ArtDetail.jsx";

function SearchResult() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetchCats();
  }, []);

  async function fetchCats() {
    const allArt = await getArt();
    setArt(allArt);
    console.log(allArt);
  }
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 ">
      {art.map((art) => (
        <div className="art-container" key={art.imageId}>
          <ArtDetail art={art} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
