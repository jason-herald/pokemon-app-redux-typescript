import { Link } from "react-router-dom";
import { Pokemon } from "../interfaces";

const IMAGE_URL: string = import.meta.env.VITE_IMAGE_URL;

function PokemonCard({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  return (
    <Link to={`/pokemon/${pokemon.name}`} className="pokemon-card">
      <img
        src={`${IMAGE_URL}${String(pokemon.details.id).padStart(3, "0")}.png`}
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>
        Type:{" "}
        {pokemon.details.types
          ?.map((type) => type.type.name)
          .join(", ")}
      </p>
    </Link>
  );
}

export default PokemonCard;
