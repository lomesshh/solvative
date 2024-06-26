import React, { useState, useRef } from 'react';
import './styles.css';

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finalTime, setFinalTime] = useState(0);

    const timerRef = useRef(null);

    const startPauseTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        } else {
            timerRef.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
            setIsRunning(true);
            setFinalTime(0);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setFinalTime(timer);
        setTimer(0);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTimer(0);
        setFinalTime(0);
    };

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

    return (
        <div className="App">
            <h1 className='heading-text'>StopWatch</h1>
            <h2>{formatTime(timer)}</h2>
            <div>
                <button className='start-button' onClick={startPauseTimer}>{isRunning ? 'Pause' : 'Start'}</button>
                <button className='stop-button' onClick={stopTimer}>Stop</button>
                <button className='reset-button' onClick={resetTimer}>Reset</button>
            </div>
            <p className='elapsed-time' >{finalTime > 0 && `Elapsed Time: ${formatTime(finalTime)}`}</p>
        </div>
    );
};

export default Stopwatch;
