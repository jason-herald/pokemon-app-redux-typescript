import "./ProductDescriptionPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pokemon } from "../../interfaces";

const IMAGE_URL: string = import.meta.env.VITE_IMAGE_URL;

function ProductDescriptionPage() {
  const pokemonDetails: Pokemon[] = useSelector((state: { pokemon: [] }) => state.pokemon);
  const { pokemonName } = useParams();
  const pokemon = pokemonDetails?.find(
    (pokemon: { name: string }) => pokemon.name === pokemonName
  )?.details;

  return (
    <div className="product-description-container">
      <h1 className="product-description-header">Pokémon Details</h1>
      {pokemon ? (
        <div className="pokemon-details">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            src={`${IMAGE_URL}${String(pokemon.id).padStart(3, "0")}.png`}
            alt={pokemon.name}
          />
          <p className="pokemon-id">ID: {pokemon.id}</p>
          <p className="pokemon-property">Height: {pokemon.height}</p>
          <p className="pokemon-property">Weight: {pokemon.weight}</p>
          <p className="pokemon-property">Abilities:</p>
          <ul className="abilities-list">
            {pokemon.abilities.map((ability: { ability: { name: string } }) => (
              <li className="ability-item" key={ability.ability.name}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Unable to fetch pokemon details</p>
      )}
    </div>
  );
}

export default ProductDescriptionPage;
