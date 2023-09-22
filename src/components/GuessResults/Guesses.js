import React from "react";

function Guesses({ guesses }) {
  const guessResult = guesses.map((guess, idx) => {
    const letters = [];

    for (let letter of guess) {
      letters.push(<span className="cell">{letter}</span>);
    }

    return (
      <p key={idx} className="guess">
        {letters}
      </p>
    );
  });

  return <div className="guess-results">{guessResult}</div>;
}

export default Guesses;
