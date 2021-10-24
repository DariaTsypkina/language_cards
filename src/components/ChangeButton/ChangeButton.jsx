import React from 'react';
import styles from './button.module.scss';

export default function ChangeButton(props) {
    const { change } = props;
    return (
        <button className={styles.button} onClick={change}>&#9998;</button>
    );
}