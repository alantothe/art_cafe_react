import Home from "./pages/Home";
import ArtDetail from "./pages/ArtDetail";
import Submit from "./pages/Submit";
import EditPage from "./pages/EditPage.jsx";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import { ArtContext } from "./ArtContext";
import { getArt } from "./api/art";
import { useState, useEffect } from "react";
import Alan from "./test/Alan";

function App() {
  const [artList, setArtList] = useState([]);
  const [error, setError] = useState(null);
  const [originalArtList, setOriginalArtList] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);

  useEffect(() => {
    async function fetchArt() {
      try {
        const allArt = await getArt();
        setArtList(allArt);
        setOriginalArtList(allArt);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchArt();
  }, []);

  if (error) {
    return <div>Error loading art: {error}</div>;
  }

  return (
    <div>
      <ArtContext.Provider
        value={{
          artList: artList,
          setArtList: setArtList,
          originalArtList: originalArtList,
          setOriginalArtList: setOriginalArtList,
          selectedArtists: selectedArtists,
          setSelectedArtists: setSelectedArtists,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/id/:imageId" element={<ArtDetail />} />
          <Route path="/edit/:imageId/" element={<EditPage />} />
          <Route path="/alantothe" element={<Alan />} />
        </Routes>
        <Footer />
      </ArtContext.Provider>
    </div>
  );
}

export default App;
