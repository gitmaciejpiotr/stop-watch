import styles from './TimerContainer.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Button from '../Button/Button';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const TimerContainer = () => {
    let msIndex = 0;
    let sIndex = 0;
    let mIndex = 0;
    let hIndex = 0;
    const [miliseconds, setMiliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [timer, setTimer] = useState('');
    const [sToDisplay, setSToDisplay] = useState('00');
    const [mToDisplay, setMToDisplay] = useState('00');
    const [hToDisplay, setHToDisplay] = useState('00');


    const start = () => {
        msIndex = miliseconds;
        sIndex = seconds;
        mIndex = minutes;
        if (!timer) {
            setTimer(setInterval(() => {
                setMiliseconds(prevValue => prevValue + 4);
                msIndex += 4;

                if (msIndex === 1000) {
                    msIndex = 0;
                    sIndex++;
                    setSeconds(prevValue => prevValue + 1);
                    setSToDisplay(changeIfUnderTen(sIndex));
                    setMiliseconds(0);
                } else if (sIndex === 60) {
                    sIndex = 0;
                    mIndex++;
                    setSeconds(0);
                    setMToDisplay(changeIfUnderTen(mIndex));
                    setMinutes(prevValue => prevValue + 1);
                } else if (mIndex === 60) {
                    mIndex = 0;
                    hIndex++;
                    setMinutes(0);
                    setHToDisplay(changeIfUnderTen(hIndex));
                    setHours(prevValue => prevValue + 1);
                }
            }, 1))
        }
    };
    const stop = () => {
        if (timer) {
            clearInterval(timer);
            setTimer('');
        }
    };
    const reset = () => {
        setMiliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setSToDisplay('00');
        setMToDisplay('00');
        setHToDisplay('00');
        msIndex = 0;
        sIndex = 0;
        mIndex = 0;
        hIndex = 0;

        if (timer) {
            setTimer('');
            clearInterval(timer);
        }
    };
    const changeIfUnderTen = time => {
        if (time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }
    useEffect(timer => {
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, []);

    return (
        <div className={styles.timerContainer}>
            <TimeDisplay>{hToDisplay}:{mToDisplay}:{sToDisplay}.{miliseconds}</TimeDisplay>
            <ButtonContainer>
                <Button className={styles.button} onClick={start}>Start</Button>
                <Button className={styles.button} onClick={stop}>Stop</Button>
                <Button className={styles.button} onClick={reset}>Reset</Button>
            </ButtonContainer>
        </div>
    );
};

export default TimerContainer;