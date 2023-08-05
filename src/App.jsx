import Home from "./pages/Home";
import ArtDetail from "./pages/ArtDetail";
import Submit from "./pages/Submit";
import Edit from "./pages/Edit";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/art/:id" element={<ArtDetail />} />
        <Route path="/:id/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
