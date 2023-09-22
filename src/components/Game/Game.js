import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState("playing");

  const addGuesses = (guess) => {
    const newGuesses = [...guesses, guess];

    setGuesses(newGuesses);

    if (guess === answer) {
      setResult("won");
    }
    if (guess !== answer && newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setResult("lose");
    }
  };

  return (
    <>
      {result !== "playing" && (
        <Banner status={result} numGuesses={guesses.length} answer={answer} />
      )}
      <GuessResults guesses={guesses} answer={answer} />

      <FormInput
        addGuesses={addGuesses}
        numGuesses={guesses.length}
        status={result}
      />
    </>
  );
}

export default Game;
