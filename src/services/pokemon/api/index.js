import axios from 'axios';

export const POKEMON_API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});
