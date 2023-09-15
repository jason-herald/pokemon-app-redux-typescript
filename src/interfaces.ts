export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: {ability:{name:string, url:string}}[];
  types: {type:{name:string, url:string}}[];
}

export interface Pokemon {
  name: string;
  details: PokemonDetails;
}
