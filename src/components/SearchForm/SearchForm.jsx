import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() === "") {
      setValidationError("Por favor, escribe un nombre o número de Pokémon.");
      return;
    }

    setValidationError("");
    onSearch(query.trim().toLowerCase());
  }

  function handleChange(e) {
    setQuery(e.target.value);
    if (validationError) {
      setValidationError("");
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <div className="search-form__field">
        <input
          type="text"
          className="search-form__input"
          placeholder="Ej. pikachu o 25"
          value={query}
          onChange={handleChange}
          required
        />
        {validationError && (
          <span className="search-form__error">{validationError}</span>
        )}
      </div>
      <button type="submit" className="search-form__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
