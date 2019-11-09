import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css';
import Type from './components/type';

const Card = (props) => {
  const { pokemon } = props;
  const [detail, setDetail] = useState(null);

  const getDetail = async () => {
    const { data } = await axios.get(pokemon.url)
    await setDetail({
      image: data.sprites.front_default,
      types: data.types
    });
  }

  useEffect(() => {
    if (pokemon) {
      getDetail();
    };
    // eslint-disable-next-line
  }, [pokemon]);

  return (
    <>
      <div className='card'>
        <div className='card-image'>
          { detail ? <img src={detail.image} alt="avatar"></img> : ''}
        </div>
        <div className='card-container'>
          <h4><b>{ pokemon.name }</b></h4>
          <div className='type-list'>
            { detail ? detail.types.map((type, i) => (
              <Type type={ type } key={ i } />
            )) : '' }
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
