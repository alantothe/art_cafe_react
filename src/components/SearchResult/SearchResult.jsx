import { useContext } from "react";
import ArtDetail from "../SearchResult/ArtDetail.jsx";
import { ArtContext } from "../../ArtContext";

function SearchResult() {
  const art = useContext(ArtContext);
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
