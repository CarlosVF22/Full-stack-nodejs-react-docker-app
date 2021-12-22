import React from "react";

const useTimer = (initialState = 0) => {
    const countRef = React.useRef(null);
    const [timer, setTimer] = React.useState(initialState);
    const [isActive, setIsActivate] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    const handleStart = () => {
        if (!isActive) {
            setIsActivate(true);
            setIsPaused(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000);
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
    }

    return {timer, isActive, isPaused, handleStart, handlePause, handleReset}
}

export {useTimer}