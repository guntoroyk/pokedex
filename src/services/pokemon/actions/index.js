import { FETCH_POKEMON } from './actionTypes';
import axios from 'axios';
import store from '../../store'

export const fetchPokemon = (offset = 0) => async dispatch => {
  const { pokemonList, next } = store.getState().pokemon
    
  try {
    if (pokemonList.length === 0) {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
      dispatch({
        type: FETCH_POKEMON,
        payload: {
          results: data.results,
          next: data.next
        }
      });
    } else {
      const { data } = await axios.get(next);
      dispatch({
        type: FETCH_POKEMON,
        payload: {
          results: pokemonList.concat(data.results),
          next: data.next
        }
      });
    };
  } catch (error) {
    console.log(error);
  };
};
