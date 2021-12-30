import React from "react";
import {formatTime} from './../utils/formatTime';

const useTimer = (initialState = 0) => {
    const countRef = React.useRef(null);
    const [timer, setTimer] = React.useState(initialState);
    const [isActive, setIsActivate] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const [textButtonStart, setTextButtonStart] = React.useState('Comenzar');

    const handleStart = () => {
        if (!isActive) {
            setIsActivate(true);
            setIsPaused(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 0.1);
            setTextButtonStart('Reanudar');
        } else {
            setIsPaused(true);
        }
    }

    const handlePause = () => {
        setIsActivate(false);
        setIsPaused(false);
        clearInterval(countRef.current);
    }

    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActivate(false);
        setIsPaused(false);
        setTimer(0);
        setTextButtonStart('Comenzar')
    }

    const timeInFormat = formatTime(timer);

    return {timer, isActive, isPaused, handleStart, handlePause, handleReset, textButtonStart, timeInFormat}
}

export {useTimer}