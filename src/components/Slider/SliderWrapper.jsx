import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from './slider.module.scss';

export default function SliderWrapper(props) {
    const { onShowPrev, onShowNext, data, number, dataLength } = props;
    const [progress, setProgress] = useState(0);
    const [learnt, setLearnt] = useState([]);

    const handleProgress = (id) => {
        setLearnt([...learnt, id]);
    }

    useEffect(() => {
        const filteredIDs = Array.from(new Set(learnt));
        setProgress(filteredIDs.length);
    }, [learnt, progress])

    return (
        <div>
            <h1 className={styles.title}>1... 2... 3... Learn!</h1>
            <div className={styles.progress}>
                {
                    progress === 0
                        ? `You've learn't nothing for today :(`
                        : `Congrats! You've learnt ` + progress + (progress > 1 ? ` words` : ` word`)
                }
            </div>
            <div className={styles.container}>
                <div className={styles.button__container}>
                    <button className={styles.button} onClick={onShowPrev}>&#8592;</button>
                </div>
                <Card
                    key={data[number].id}
                    id={data[number].id}
                    english={data[number].english}
                    translation={data[number].russian}
                    transcription={data[number].transcription}
                    handleProgress={handleProgress}
                />
                <div className={styles.button__container}>
                    <button className={styles.button} onClick={onShowNext}>&#8594;</button>
                </div>
                <div className={styles.count__container}>{number + 1} / {dataLength}</div>
            </div>
        </div>
    )
}