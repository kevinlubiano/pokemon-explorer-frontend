import { useParams } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import "./PokemonResult.css";

function PokemonResult() {
  const { name } = useParams();

  return (
    <section className="pokemon-result">
      <p className="pokemon-result__query">Buscando: {name}</p>
      <PokemonCard name={name} />
    </section>
  );
}

export default PokemonResult;
