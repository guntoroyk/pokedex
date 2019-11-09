import { FETCH_POKEMON } from './actionTypes';
import { POKEMON_API } from '../api';

export const fetchPokemon = () => async dispatch => {
  try {
    const { data } = await POKEMON_API.get('/');
    console.log(data.results, 'from pokemon action');
    dispatch({
      type: FETCH_POKEMON,
      payload: data.results
    })
  } catch (error) {
    console.log(error);
  };
};
