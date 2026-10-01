import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../utils/PokeApi.js";
import {
  ERROR_MESSAGE,
  NOT_FOUND_MESSAGE,
  LOCAL_STORAGE_KEY,
} from "../../utils/constants.js";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import MovesList from "../MovesList/MovesList.jsx";
import "./PokemonResult.css";

function PokemonResult() {
  const { name } = useParams();

  return <PokemonResultContent key={name} name={name} />;
}

function PokemonResultContent({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPokemonByName(name)
      .then((data) => {
        if (!data) {
          setPokemon(null);
        } else {
          setPokemon(data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        }
      })
      .catch(() => {
        setError(ERROR_MESSAGE);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return (
    <section className="pokemon-result">
      {isLoading && <Preloader />}

      {!isLoading && error && (
        <p className="pokemon-result__message pokemon-result__message--error">
          {error}
        </p>
      )}

      {!isLoading && !error && !pokemon && (
        <p className="pokemon-result__message">{NOT_FOUND_MESSAGE}</p>
      )}

      {!isLoading && !error && pokemon && (
        <>
          <PokemonCard
            name={pokemon.name}
            number={String(pokemon.id).padStart(3, "0")}
            types={pokemon.types}
            image={pokemon.image}
          />
          <MovesList moves={pokemon.moves} />
        </>
      )}
    </section>
  );
}

export default PokemonResult;
