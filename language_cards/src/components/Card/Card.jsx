import React from 'react';
import styles from './Card.module.scss';
import CheckButton from '../CheckButton/CheckButton';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card__word}>{props.english}</div>
            <div className={styles.card__transcription}>{props.transcription}</div>
            <div className={styles.buttons}>
                <CheckButton
                    translation={props.translation}
                    handleProgress={props.handleProgress}
                />
            </div>
        </div>
    );
}