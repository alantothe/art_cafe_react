import Home from "./pages/Home";
import ArtDetail from "./pages/ArtDetail";
import Submit from "./pages/Submit";
import Edit from "./pages/Edit";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import { ArtContext } from "./ArtContext";
import { getArt } from "./api/art";
import { useState, useEffect } from "react";
function App() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    async function fetchCats() {
      const allArt = await getArt();
      setArt(allArt);
    }

    fetchCats();
  }, []);

  return (
    <div>
      <ArtContext.Provider value={art}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/art/:id" element={<ArtDetail />} />
          <Route path="/:id/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </ArtContext.Provider>
    </div>
  );
}

export default App;
