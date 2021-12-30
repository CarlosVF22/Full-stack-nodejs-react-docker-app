import React from "react";

import './chronometer.css';

import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

function Chronometer(props) {
    return (
        <Container>
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
        </Container>
    );
}

export { Chronometer }