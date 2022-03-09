import React, {useState} from "react";
import Advice from "./Advice";
import PatternDivider from "./PatternDivider";
import axios from "axios";

function App() {
  const initialState = {
    id: 177,
    advice: "\"It is easy to sit up and take notice, what's difficult is getting up and taking action \""
  }
  const [adviceState, setAdvice] = useState(initialState);

  const handleClick = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {setAdvice(res.data.slip); console.log(res)})
      .catch((error) => {console.log(error)});
  }

  return (
    <main className="App">
      <p>ADVICE {adviceState.id}</p>
      <Advice advice = {adviceState.advice}/>
      <PatternDivider/>
      <button type="button" onClick= {() => handleClick()}><img src="/images/icon-dice.svg"/></button>
    </main>
  );
}

export default App;
