import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You correctly guessed!" : "You failed!"}</h3>
      <h1>Correct: {correctWord.toUpperCase()}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts.</h3>
      )}
    </div>
  );
};

export default GameOver;
