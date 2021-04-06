import React, { useState } from 'react';
import Main from './main';
import InputOption from './InputOptions';
import Game from './Game';

const App = () => {
    //switch to "show" between components of the app 
    const [show, setShow] = useState(false);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player1Weapon, setPlayer1Weapon] = useState("");
    const [player2Weapon, setPlayer2Weapon] = useState("");

    const chosenP1 = (e) => {
        setPlayer1Weapon(e.target.id);
        setPlayer2Weapon(player1Weapon === " x" ? e.target.id : " o");
        setShow(true)
    }

    const chosenP2 = (e) => {
        setPlayer1Weapon(e.target.id);
        setPlayer2Weapon(player1Weapon === " o" ? e.target.id : " x");
        setShow(true)
    }

    const playerHandler1 = (e) => {
        setPlayer1(e.target.value)
    }
    const playerHandler2 = (e) => {
        setPlayer2(e.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1 className="pl-3 text-center">TicTacToe in React.js</h1>
                </div>
            </div>
            <Main >
                <InputOption show={show} playerHandler1={playerHandler1} playerHandler2={playerHandler2} chosenP1={chosenP1} chosenP2={chosenP2} />
                <Game show={show} player1={player1} player2={player2} player1Weapon={player1Weapon} player2Weapon={player2Weapon} />

            </Main>
        </>
    )
};

export default App;