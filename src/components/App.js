import React from "react";
import Advice from "./Advice";
import PatternDivider from "./PatternDivider";
// import {ReactComponent as IconDice} from "/images/icon-dice.svg";

function App() {
  return (
    <main className="App">
      <p>ADVICE #177</p>
      <Advice/>
      <PatternDivider/>
      <button type="button"><img src="/images/icon-dice.svg"/></button>
    </main>
  );
}

export default App;
