export const setPokemonList = (
  pokemonList: any[]
): { type: string; payload: any[] } => {
  return {
    type: "SET_POKEMON_LIST",
    payload: pokemonList,
  };
};
