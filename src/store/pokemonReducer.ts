const initialState = {
  pokemon: [],
};
const pokemonReducer = (
  state = initialState,
  action: { type: string; payload: [] }
) => {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return { ...state,pokemon: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
