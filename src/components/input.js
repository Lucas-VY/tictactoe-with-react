<>
<div className={"" + (props.show === false ? "d-none" : "")}>
    <div className="header">
        <h2>{winner ? `${winner ? props.player1 : props.player2} Wins! ` : `It is ${turn ? props.player1 : props.player2}'s turn!`}</h2>
        <button className="btn btn-light" onClick={refreshPage}>Start Over</button>
    </div>
    <Board squares={history[stepNumber]} onClick={handleClick} />
</div>
</>
);
};