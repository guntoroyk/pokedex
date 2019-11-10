import { FETCH_POKEMON } from '../actions/actionTypes';

const initialState = {
  pokemonList: [],
  next: null
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemonList: action.payload.results,
        next: action.payload.next
      }
    default: 
      return state;
  };
};

export default pokemonReducer;
