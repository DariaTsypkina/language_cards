import React, { useState, useRef, useEffect } from "react";
import Card from "../Card/Card";
import styles from './slider.module.scss';

export default function SliderWrapper(props) {
    const { onShowPrev, onShowNext, data, number, dataLength } = props;
    const [progress, setProgress] = useState(0);

    const buttonRef = useRef(null);
    useEffect(() => buttonRef.current && buttonRef.current.focus());

    const handleProgress = () => {
        setProgress(progress + 1);
    }
    const yourProgress = progress <= 1 ? progress + ` word` : progress + ` words`;

    return (
        <div>
            <h1 className={styles.title}>1... 2... 3... Learn!</h1>
            <div className={styles.progress}>Congrats! You've learnt {yourProgress}</div>
            <div className={styles.container}>
                <div className={styles.button__container}>
                    <button className={styles.button} onClick={onShowPrev}>&#8592;</button>
                </div>
                <Card
                    key={data[number].id}
                    english={data[number].english}
                    translation={data[number].russian}
                    transcription={data[number].transcription}
                    progress={progress}
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