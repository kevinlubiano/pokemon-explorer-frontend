import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import PokemonResult from "../PokemonResult/PokemonResult.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
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
