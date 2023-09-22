import React from "react";
import { checkGuess } from "../../game-helpers";
function Guess({ guess, answer }) {
  if (guess === undefined) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }
  return (
    <p className="guess">
      {checkGuess(guess, answer).map((element, idx) => {
        return (
          <span key={idx} className={`cell ${element.status}`}>
            {element.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
