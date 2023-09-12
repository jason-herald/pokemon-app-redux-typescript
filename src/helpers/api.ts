const BASE_URL: string = import.meta.env.VITE_BASE_URL;

export async function fetchPokemonList() {
  const response = await fetch(`${BASE_URL}/pokemon`);
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonDetails(pokemonName: string) {
  const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}
