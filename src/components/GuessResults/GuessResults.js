import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((idx) => {
        return <Guess key={idx} guess={guesses[idx]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
