import Card from "./components/Card";
import "./App.css";
import Header from "./components/Heading";
import Button from "./components/Button";
import { useState } from "react";
import { Link, Route,Routes } from "react-router-dom";
import soso from "./Assests/Images/top_frame_2.jpg"
import ReactPlayer from "react-player"
import Bird from "./components/Bird";
const randNum = () => Math.floor(Math.random() * 100) + 1;
function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
    <nav className="nav">
      <Link to= "/" className="nav-item" title="Header">Header</Link>
      <Link to ="/card" className="nav-item">Card</Link>
    </nav>
      <h1>current number : {num}</h1>
      <button onClick={() => setNum(num + 1)}>Add 1</button>
      <button onClick={() => setNum(num - 1)}>Subtract 1</button>
      <Routes>
        <Route path="/" element = {<Header firstname="bob" />}/>
        <Route path="/card" element = {<Card h2="First card's h2" h3="First card's h3" num={randNum} />}/>
      </Routes>
      <Bird/>
      <Header firstname="bob" />,
      <img 
      height={200} src={soso} alt="soso sipping mata"
      />
      <Card h2="First card's h2" h3="First card's h3" num={randNum} />,
      <Card h2="Second card's h2" h3="Second card's h3" num={randNum} />,
      <ReactPlayer url='https://www.youtube.com/watch?v=T8TZQ6k4SLE' playing="True" />
      <Button />,
      
    </div>
  );
}

export default App;
