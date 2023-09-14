export const setPokemonList = (
  pokemon: any[]
): { type: string; payload: any[] } => {
  return {
    type: "SET_POKEMON_LIST",
    payload: pokemon,
  };
};
