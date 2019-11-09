import React from 'react' 
import './card.css'

const Card = () => {
  return (
    <>
      <div className='card'>
        <div className='card-image'>
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="avatar"></img>
        </div>
        <div className='card-container'>
          <h4><b>Pokemon's Name</b></h4>
          <p>pokemon's descriptions</p>
        </div>
      </div>
    </>
  )
}

export default Card
