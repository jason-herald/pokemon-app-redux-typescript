import { useEffect } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../../helpers/api";
import "./ProductListingPage.css";
import PokemonCard from "../../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../../store/pokemonActions";
import { Pokemon, PokemonListItem } from "../../interfaces";

function ProductListingPage() {
  const dispatch = useDispatch();
  const pokemonDetails: Array<Pokemon> = useSelector(
    (state: { pokemon: [] }) => state.pokemon
  );

  useEffect(() => {
    async function fetchData() {
      const data: PokemonListItem[] = await fetchPokemonList();
      const pokemonWithDetails: Pokemon[] = await Promise.all(
        data.map(async (pokemon: PokemonListItem) => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );
      console.log(pokemonWithDetails);
      dispatch(setPokemonList(pokemonWithDetails));
    }
    fetchData();
  }, [dispatch]);
  console.log("value", pokemonDetails);
  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonDetails?.map(
          (pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
