import Card from "./components/Card";
import "./App.css";
import Header from "./components/Heading";
import Button from "./components/Button";
import { useState } from "react";

const randNum = () => Math.floor(Math.random() * 100) + 1;
function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>current number : {num}</h1>
      <button onClick={() => setNum(num + 1)}>Add 1</button>
      <button onClick={() => setNum(num - 1)}>Subtract 1</button>
      <Header firstname="bob" />,
      <Card h2="First card's h2" h3="First card's h3" num={randNum} />,
      <Card h2="Second card's h2" h3="Second card's h3" num={randNum} />,
      <Button />,
      
    </>
  );
}

export default App;
