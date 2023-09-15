import { Pokemon } from "../interfaces";
export const setPokemonList = (
  pokemon: Pokemon[]
): { type: string; payload: Pokemon[] } => {
  console.log(pokemon);
  return {
    type: "SET_POKEMON_LIST",
    payload: pokemon,
  };
};
