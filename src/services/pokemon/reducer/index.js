import { FETCH_POKEMON } from '../actions/actionTypes';

const initialState = {
  pokemonList: null,

};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return {
        ...state,
        pokemonList: action.payload
      }
    default: 
      return state
  };
};

export default pokemonReducer;
