import React from "react";
import QuoteButton from "./QuoteButton";

const QuoteBox = ({ quote, newQuote, color }) => {
  return (
    <div className="quoteBox" style={{ color: color }}>
      <p className="quoteBox__quote">{quote.quote}</p>
      <h3 className="quoteBox__author">{quote.author}</h3>
      <div className="container__quote">
        <i class="bx bxs-quote-alt-left"></i>
      </div>
      <QuoteButton color={color} newQuote={newQuote} />
    </div>
  );
};

export default QuoteBox;
