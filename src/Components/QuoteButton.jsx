import React from "react";

const QuoteButton = ({ newQuote, color }) => {
  return (
    <div>
      <button
        className="quoteBox__button"
        onClick={newQuote}
        style={{ background: color }}
      >
        <span>
          <i class="bx bxs-chevron-right"></i>
        </span>
      </button>
    </div>
  );
};

export default QuoteButton;
