import SearchResult from "../components/SearchResult/SearchResult.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar/FilterBar.jsx";
import ArtistResult from "../components/FilterBar/FilterBy/Artist/ArtistResult.jsx";

function Home() {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <ArtistResult />
      <SearchResult />
    </div>
  );
}

export default Home;
