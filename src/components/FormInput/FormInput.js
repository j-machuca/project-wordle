import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function FormInput({ addGuesses, numGuesses, status }) {
  const [userInput, setUserInput] = React.useState("");
  console.log(status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (NUM_OF_GUESSES_ALLOWED > numGuesses) {
      addGuesses(userInput);
      setUserInput("");
    } else {
      window.alert("Max number of guesses reached");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value.toUpperCase());
        }}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={status === "playing" ? false : true}
      />
    </form>
  );
}

export default FormInput;
