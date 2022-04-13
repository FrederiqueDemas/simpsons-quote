import React from "react";
import "./App.css";
import axios from "axios";
import QuoteCard from "./QuoteCard";

function App() {
  const simpsonCard =
      {
      quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: "Lisa Simpson",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
      characterDirection: "Right",
    }
  const [quoteList, setQuoteList] = React.useState(simpsonCard)
  
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setQuoteList(data[0]);
      });
  };

  return (
    <div>
      <QuoteCard quoteList={quoteList} />
      <button type="button" onClick={getQuote}>
        Simpson quote
      </button>
    </div>
  );
}

export default App;
