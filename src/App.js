import React, { useState } from "react";
import InputOptions from "./components/InputOptions";
import Game from './components/Game'


const App = () => {
  const [runGame, setRunGame] = useState(false);
  const [chooseX, setChooseX] = useState(true);

  function showGame(chooseX) {
    setChooseX(chooseX);
    setRunGame(true);
  }

  return (
    <div>
      <h2>Tic Tac Toe in React.js</h2>
      {runGame === true ? (

/* switch */
        <Game chooseX={chooseX} />
      ) : (
        <InputOptions
          startGame={showGame} />
      )}
    </div>
  );
};

export default App;