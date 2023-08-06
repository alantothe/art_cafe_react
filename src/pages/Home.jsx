import { useState } from "react";

import SearchResult from "../components/SearchResult/SearchResult.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar/FilterBar.jsx";
import ArtistResult from "../components/FilterBar/FilterBy/Artist/ArtistResult.jsx";
function Home() {
  const [showArtistResult, setShowArtistResult] = useState(false);

  const toggleArtistResult = () => {
    setShowArtistResult((prevState) => !prevState);
  };

  return (
    <div>
      <SearchBar />
      <FilterBar onArtistClick={toggleArtistResult} />
      {showArtistResult && <ArtistResult />}

      <SearchResult />
    </div>
  );
}

export default Home;
