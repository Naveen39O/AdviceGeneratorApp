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
      <div className="dice-button">
        <button type="button" className="visually-hidden" onClick={() => handleClick()}>
          <img src="images/icon-dice.svg" alt=""/>
          click for new advice
        </button>
      </div>
    </section>
  );
}

export default Advice;