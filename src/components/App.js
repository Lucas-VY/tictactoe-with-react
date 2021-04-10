import React, { useState } from "react";
import InputOptions from "./InputOptions";
import Game from './Game'


const App = () => {
  const [runGame, setRunGame] = useState(false);
  const [chooseX, setChooseX] = useState(true);

  const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("initialState")

  function showGame(chooseX) {
    setChooseX(chooseX);
    setRunGame(true);
  }

  return (
    <div>
      <h2>Tic Tac Toe in React.js</h2>
      {runGame === true ? (
        <Game chooseX={chooseX} player1={player1} player2={player2} />
      ) : (
        <InputOptions startGame={showGame} />
      )}
    </div>
  );
};

export default App;