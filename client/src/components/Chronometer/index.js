import React from "react";

import './chronometer.css';

import Button from 'react-bootstrap/Button';

function Chronometer(props) {
    const finishGame = props.finishGame;
    return (
        <div className="chronometer">
            <h2>{props.timeInFormat}</h2>
            <Button
                onClick={props.handleStart}
                variant={'success'}
            >
                {`${props.textButtonStart}`}
            </Button>
            <Button
                onClick={props.handlePause}
                variant={'danger'}
            >
                {'Pausar'}
            </Button>
            <Button
                onClick={props.handleReset}
                variant={'secondary'}
            >
                {'Reiniciar'}
            </Button>
            <Button
                onClick={() => finishGame(props.timer)}
            >
                {'Terminar juego'}
            </Button>
        </div>
    );
}

export { Chronometer }