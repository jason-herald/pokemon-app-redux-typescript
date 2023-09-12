const initialState = {};
const pokemonReducer = (
  state = initialState,
  action: { type: string; payload: [] }
) => {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;
