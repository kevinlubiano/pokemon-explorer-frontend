import { useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";
import "./Main.css";

function Main({ lastSearch }) {
  const navigate = useNavigate();

  function handleSearch(term) {
    navigate(`/pokemon/${term}`);
  }

  return (
    <main className="main">
      <section className="main__hero">
        <h1 className="main__title">¿Qué Pokémon buscas hoy?</h1>
        <p className="main__subtitle">
          Busca por nombre o número para ver sus estadísticas, tipos y
          movimientos.
        </p>
        <SearchForm onSearch={handleSearch} />
        {lastSearch && (
          <button
            type="button"
            className="main__last-search"
            onClick={() => navigate(`/pokemon/${lastSearch.name}`)}
          >
            Ver tu última búsqueda: {lastSearch.name}
          </button>
        )}
      </section>
    </main>
  );
}

export default Main;
