import React, { useState } from "react";
import { calculateWinner } from "../Winner";
import Board from "./Board";
import './Game.css';

const Game = props => {
    //hystory of filled squares 
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    //turns
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        // return if won or occupied
        if (winner || squares[i]) return;

        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    //restart   
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <div className={"" + (props.show === false ? "d-none" : "")}>
                <div className="header">
                    <h2>{winner ? `${winner} Wins! ` : `It is ${xIsNext ? props.player1 : props.player2}'s turn!`}</h2>
                    <button className="btn btn-light" onClick={refreshPage}>Start Over</button>
                </div>
                <Board squares={history[stepNumber]} onClick={handleClick} />
            </div>
        </>
    );
};

export default Game;