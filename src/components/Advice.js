import React, { useEffect } from 'react';
import PatternDivider from "./PatternDivider";
import useAdvice from '../useAdvice';

function Advice(props) {
  var {adviceState, loading, error, fetchAdvice} = useAdvice();

  useEffect(()=>{
    fetchAdvice()
  }, [])

  const handleClick = () => {
    fetchAdvice();
  }

  var advice = loading? "Loading..."
               : error? '"' + error + '"'
                 : '"' + adviceState.advice + '"';

  return (
    <section className="card-body">
      <p className="advice-id">ADVICE #{adviceState.id}</p>
      <h1 className="advice">
        {advice}
      </h1>      
      <PatternDivider/>
      <button type="button" className="dice-button" onClick={() => handleClick()}>
        <img src="images/icon-dice.svg" alt=""/>
        <a className="visually-hidden">click for new advice</a>
      </button>
    </section>
  );
}

export default Advice;