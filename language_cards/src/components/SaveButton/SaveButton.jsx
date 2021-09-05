import React from 'react';
import styles from './button.module.scss';

export default function SaveButton(props) {
    const { save } = props;
    return (
        <button className={styles.button} onClick={save}>Save</button>
    );
}