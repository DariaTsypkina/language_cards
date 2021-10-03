import React from 'react';
import styles from './button.module.scss';

export default function SaveButton(props) {
    const { save, words } = props;

    const inputValues = Object.values(words).map(item => { return !!item.trim() });
    const isDisabled = inputValues.includes(false); // return true or false

    return (
        <button className={styles.button} onClick={save} disabled={isDisabled}>Save</button >
    )
}