import React, { useState } from "react";
import { calculateWinner } from "../Winner";
import Board from "./Board";
import './Game.css';

const Game = ({ chooseX, props }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(chooseX);
    const winner = calculateWinner(board);

    /*   */

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = turn ? 'X' : 'O';
        setBoard(boardCopy);
        setTurn(!turn);
    }
    /*    */

    //restart btn 
    const refreshPage = () => {
        window.location.reload();
    }

    /*    */

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 header">
                        <h2>{winner ? `${winner} Wins!` : `'It is ' ${turn ? 'X' : 'O'}' turn'`}</h2>
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

{/* <h2>{winner ? `${winner ? props.player1 : props.player2} Wins! ` : `It is ${xIsNext ? props.player1 : props.player2}'s turn!`}</h2> */}