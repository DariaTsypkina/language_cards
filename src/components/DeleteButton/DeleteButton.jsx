import React from 'react';
import styles from './button.module.scss';

export default function CancelChangeButton(props) {
    const { handleDelete } = props;
    return (
        <button className={styles.button} onClick={handleDelete}>&#128465;</button>
    );
}