import React from 'react';
import styles from './button.module.scss';

export default function SaveButton(props) {
    const { save, isDisabled } = props;

    return (
        <button className={styles.button} onClick={save} disabled={isDisabled}>Save</button >
    )
}