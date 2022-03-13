import React, {useState} from "react";
import Advice from "./Advice";
import PatternDivider from "./PatternDivider";
import axios from "axios";

function App() {
  const initialState = {
    id: 117,
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action"
  }
  const [adviceState, setAdvice] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    setIsLoading(true);
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => 
        {
          setAdvice(res.data.slip); 
          setIsLoading(false);
          setError("");
        })
      .catch((error) => 
        {
          console.log(error);
          setError(error);
          setIsLoading(false);
        });
  }

  return (
    <main className="card ">
      <section className="card-body">
        <p className="advice-id">ADVICE #{adviceState.id}</p>
        {isLoading? 
          <Advice advice = "Loading"/>
          : error?
            <Advice advice = {error}/>
            : <Advice advice = {adviceState.advice}/>}
        <PatternDivider/>
        <button type="button" className ="dice-button" onClick= {() => handleClick()}><img src="/images/icon-dice.svg" alt = "dice"/></button>
      </section>
      
    </main>
  );
}

export default App;
