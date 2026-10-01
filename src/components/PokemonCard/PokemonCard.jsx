import "./PokemonCard.css";

function PokemonCard({
  name = "Pikachu",
  number = "025",
  types = ["Eléctrico"],
  image,
}) {
  return (
    <article className="pokemon-card">
      <img
        className="pokemon-card__image"
        src={
          image ||
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        alt={name}
      />
      <p className="pokemon-card__number">#{number}</p>
      <h3 className="pokemon-card__name">{name}</h3>
      <ul className="pokemon-card__types">
        {types.map((type) => (
          <li key={type} className="pokemon-card__type">
            {type}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PokemonCard;
