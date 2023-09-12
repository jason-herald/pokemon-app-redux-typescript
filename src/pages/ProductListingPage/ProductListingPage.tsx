import { useEffect } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../../helpers/api";
import "./ProductListingPage.css";
import PokemonCard from "../../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../../store/pokemonActions";

function ProductListingPage() {
  const dispatch = useDispatch();
  const pokemonDetails: [] = useSelector(
    (state: { pokemon: [] }) => state.pokemon
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonList();
      const pokemonWithDetails = await Promise.all(
        data.map(async (pokemon: { name: string }) => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );
      dispatch(setPokemonList(pokemonWithDetails ));
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonDetails?.map(
          (pokemon: { name: string; details: { id: number; types: [] } }) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
