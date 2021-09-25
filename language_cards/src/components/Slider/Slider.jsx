import React, { useEffect, useState } from "react";
import SliderWrapper from "./SliderWrapper";
import styles from './slider.module.scss';

export default function Slider() {
    const [words, setWords] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pos, setPos] = useState(0);

    const getWords = () => {
        fetch('./words.json', {
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // }
        })
            .then(res => res.json())
            .then(result => {
                setIsLoaded(true);
                setWords(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }

    useEffect(() => {
        getWords()
    }, [])

    useEffect(() => {
        if (pos > words.length) {
            setPos(0);
        }
    }, [pos, words]);

    const showPrevHandler = () => {
        setPos(pos === 0 ? words.length - 1 : pos - 1);
    }

    const showNextHandler = () => {
        setPos(pos === words.length - 1 ? 0 : pos + 1);
    }

    if (!isLoaded) {
        return <div className={styles.container}>
            <div className={styles.loading}>
                <p className={styles.info}>Loading...</p>
            </div>
        </div>
    } else if (error) {
        return <div className={styles.container}>
            <div className={styles.error}>
                <p className={styles.info}>Something went wrong...<br />
                    <span className={styles.error__details}>{error.message}</span></p>
            </div>
        </div>
    } else {
        return (
            words?.length > 0 && <SliderWrapper
                onShowPrev={showPrevHandler}
                onShowNext={showNextHandler}
                number={pos}
                dataLength={words.length}
                data={words}
            />
        )
    }
}