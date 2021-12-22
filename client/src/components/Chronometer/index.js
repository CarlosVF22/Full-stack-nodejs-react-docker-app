import React from "react";
import './chronometer.css';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import { useTimer } from "../../hooks/useTimer";
import { formatTime } from "../../utils/formatTime";

function Chronometer() {
    const {
        timer, 
        isActive, 
        isPaused, 
        handleStart, 
        handlePause, 
        handleReset
    } = useTimer(0);

    const time = formatTime(timer);

    return (
        <Container>
            <h2>{time}</h2>
            <Button
                onClick={handleStart}
                variant={'success'}
            >
                {'Comenzar'}
            </Button>
            <Button
                onClick={handlePause}
                variant={'danger'}
            >
                {'Pausar'}
            </Button>
            <Button
                onClick={handleReset}
                variant={'secondary'}
            >
                {'Reiniciar'}
            </Button>
        </Container>
    );
}

export { Chronometer }