import React, { useState } from "react";
import { calculateWinner } from "../Winner";
import Board from "./Board";
import './Game.css';

const Game = ({ chooseX }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(chooseX);
    const winner = calculateWinner(board);

    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("initialState")

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    //restart   
    const refreshPage = () => {
        window.location.reload();
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 header">
                        <h2>{winner ? `${winner} Wins!` : 'It is: ' + (xIsNext ? 'X' : 'O')}</h2>
                        <button className="btn btn-light" onClick={refreshPage}>
                            Reset Game
            </button>
                    </div>
                </div>
                <Board squares={board} onClick={handleClick} />
            </div>


        </>
    )
}

export default Game;