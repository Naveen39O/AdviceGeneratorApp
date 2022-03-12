import React from 'react';

function Advice(props) {
  return (
    <h1 className='advice'>{'"' + props.advice + '"'}</h1>
  );
}

export default Advice;