import React from "react";

import './consumedGameTable.css';

import {TotalValueGame} from './../TotalValueGame';

function ConsumedGameTable(props) {
    const latestGame = props.valueGame;
    const [totalValueGame, setTotalValueGame] = React.useState(0);

    const addGame = (latestGame) => {
        const newTotalValueGame = totalValueGame + latestGame
        setTotalValueGame(newTotalValueGame);
    }
    return (
        <div>
            <button
                onClick={() => addGame(latestGame)}
            >
                agregar juego
            </button>
            <br/>
            <span>{latestGame}</span>
            <br></br>
            <span>{totalValueGame}</span>
        </div>
    );
}

export {ConsumedGameTable};