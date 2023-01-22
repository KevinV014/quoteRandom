import "./App.css";
import db from "./db/quotes.json";
import { useState } from "react";
import QuoteBox from "./Components/QuoteBox";

function App() {
  const arrayColors = [
    "#3c3d42",
    "#f6f8e2",
    "#e0ddca",
    "#a5dbdd",
    "#eef1f6",
    "#f7b733",
    "#74ebd5",
    "#fdeff9",
    "#e1eec3",
    "#C9D6FF",
    "#F7EAD8",
    "#AAD8EF",
  ];
  const getRandom = (arrayElements) => {
    const arrayLength = arrayElements.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    return arrayElements[randomIndex];
  };

  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db));
    setColor(getRandom(arrayColors));
  };
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <QuoteBox quote={quote} newQuote={newQuote} color={color} />
    </div>
  );
}

export default App;
