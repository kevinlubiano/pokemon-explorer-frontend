const BASE_URL = "https://pokeapi.co/api/v2";

function getPokemonByName(name) {
  return fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`)
    .then((res) => {
      if (res.status === 404) {
        return null;
      }
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (!data) return null;
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((t) => t.type.name),
        moves: data.moves.map((m) => m.move.name),
      };
    });
}

export { getPokemonByName };
