import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/card';
import Loader from '../loader'
import './cardlist.css';
import { fetchPokemon } from '../../services/pokemon/actions';

const CardList = () => {
  const dispatch = useDispatch()
  const { pokemonList } = useSelector(state => state.pokemon)
  useEffect(() => {
    dispatch(fetchPokemon())
    // eslint-disable-next-line
  }, [])

  if (!pokemonList) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <div className='card-list'>
        {
          pokemonList.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.name } />
          ))
        }
      </div>
    </>
  )
}

export default CardList;
