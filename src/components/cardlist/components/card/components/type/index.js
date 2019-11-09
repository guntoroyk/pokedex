import React from 'react';
import './type.css';

const Type = (props) => {
  const { type } = props;
  
  return (
    <div className='box-type'>
      <span> { type ? type.type.name : '' } </span>
    </div>
  );
};

export default Type;