import React from 'react';
import SaveButton from '../SaveButton/SaveButton';
import styles from './input.module.scss';

export default class InputLine extends React.Component {
    render() {
        return (
            <div className={styles.line}>
                <div>
                    <input className={styles.input_number} type="text" placeholder="№" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="Word" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="Translation" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="Transcription" />
                </div>
                <div>
                    <input className={styles.input} type="text" placeholder="Theme" />
                </div>
                <div className={styles.buttons}>
                    <SaveButton />
                </div>
            </div>
        );
    }
}