import { Link } from "react-router-dom";

const IMAGE_URL: string = import.meta.env.VITE_IMAGE_URL;

function PokemonCard({
  pokemon,
}: {
  pokemon: { name: string; details: { id: number; types: [] } };
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
          ?.map((type: { type: { name: string } }) => type.type.name)
          .join(", ")}
      </p>
    </Link>
  );
}

export default PokemonCard;
