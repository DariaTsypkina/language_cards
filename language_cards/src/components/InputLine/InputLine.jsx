import React from 'react';
import SaveButton from '../SaveButton/SaveButton';
import styles from './input.module.scss';

export default class InputLine extends React.Component {
    render() {
        return (
            <tr className={styles.line}>
                <td>
                    <input className={styles.input} type="text" placeholder="Word" />
                </td>
                <td>
                    <input className={styles.input} type="text" placeholder="Translation" />
                </td>
                <td>
                    <input className={styles.input} type="text" placeholder="Transcription" />
                </td>
                <td>
                    <input className={styles.input} type="text" placeholder="Theme" />
                </td>
                <td className={styles.buttons}>
                    <SaveButton />
                </td>
            </tr>
        );
    }
}