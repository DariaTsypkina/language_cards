import React from "react";
import Card from "../Card/Card";
import styles from './slider.module.scss';

export default function SliderWrapper(props) {
    const { onShowPrev, onShowNext, data, number, dataLength } = props;

    return (
        <div>
            <h1 className={styles.title}>1... 2... 3... Learn!</h1>
            <div className={styles.container}>
                <div className={styles.button__container}>
                    <button className={styles.button} onClick={onShowPrev}>&#8592;</button>
                </div>
                <Card
                    key={data[number].id}
                    english={data[number].english}
                    translation={data[number].russian}
                    transcription={data[number].transcription}
                />
                <div className={styles.button__container}>
                    <button className={styles.button} onClick={onShowNext}>&#8594;</button>
                </div>
                <div className={styles.count__container}>{number + 1} / {dataLength}</div>
            </div>
        </div>
    )
}