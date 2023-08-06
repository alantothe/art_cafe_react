import { useContext, useState, useEffect } from "react";
import ArtDetail from "../SearchResult/ArtDetail.jsx";
import { ArtContext } from "../../ArtContext";

function SearchResult() {
  const allArt = useContext(ArtContext);

  const [visibleArt, setVisibleArt] = useState([]);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    // Load initial subset
    setVisibleArt(allArt.slice(0, itemsPerPage));
  }, [allArt]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 250 // 500 is the distance from the bottom to trigger the next load. Adjust as needed.
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleArt, offset]);

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + itemsPerPage);
    const moreArt = allArt.slice(offset, offset + itemsPerPage);
    setVisibleArt((prevArt) => [...prevArt, ...moreArt]);
  };

  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-4 mx-40 pt-32 ">
      {visibleArt.map((art) => (
        <div className="art-container" key={art.imageId}>
          {/* <ArtDetail art={art} /> */}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
