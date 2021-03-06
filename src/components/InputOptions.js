import React from 'react';
import './InputOptions.css'

const InputOptions = ({ startGame, props }) => {

    return (
        <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3>Pick a Weapon</h3>
        </div>
    </div>
    <div className="container" id="boardgame">
        <div className="row mt-5">
            <div className="col-md-12 text-center font-weight-bold">
                <p id="titulo">Choose your weapon</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-10 col-md-6 mb-2" >
                <input type="text" name="player1" id="player1" placeholder="Player 1" />
            </div>
            <div className="col-10 col-md-6">
                <input type="text" name="player2" id="player2" placeholder="Player 2" />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 col-md-6 text-right ">
                <button className="text-warning " id=" x" onClick={() => startGame(true)}>X</button>
            </div>
            <div className="col-6 col-md-6 text-left">
                <button className="text-info " id=" o" onClick={() => startGame(false)}>0</button>
            </div>
        </div>
    </div>
</div>
    )
};
    
export default InputOptions;