import SearchResult from "../components/SearchResult/SearchResult.jsx";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar/FilterBar.jsx";
import FilterBarExpand from "../components/FilterBar/FilterBarExpand.jsx";
function Home() {
  return (
    <div>
      <SearchBar />
      <FilterBar />
      <FilterBarExpand />
      <SearchResult />
    </div>
  );
}

export default Home;
