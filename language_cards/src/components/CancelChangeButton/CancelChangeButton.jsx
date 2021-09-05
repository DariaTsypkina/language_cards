import React from 'react';
import styles from './button.module.scss';

export default function CancelChangeButton(props) {
    const { cancel } = props;
    return (
        <button className={styles.button} onClick={cancel}>&#10006;</button>
    );
}