import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import PokemonResult from "../PokemonResult/PokemonResult.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import { LOCAL_STORAGE_KEY } from "../../utils/constants.js";
import "./App.css";

function App() {
  const [lastSearch, setLastSearch] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setLastSearch(JSON.parse(saved));
      } catch {
        setLastSearch(null);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main lastSearch={lastSearch} />} />
          <Route path="/pokemon/:name" element={<PokemonResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
