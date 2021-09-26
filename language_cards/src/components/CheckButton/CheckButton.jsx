import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './button.module.scss';

export default function CheckButton(props) {
    const [checked, setChecked] = useState(false);
    const location = useLocation();

    const handleCheck = () => {
        setChecked(!checked);
    }

    // добавили 2 функции по клику, если на странице game
    const handleChange = () => {
        if (location.pathname === '/game') {
            handleCheck();
            props.handleProgress();
        } else handleCheck();
    }

    return (
        !checked
            ? <button className={styles.button} onClick={handleChange}>Check</button>
            : <div className={styles.translation} onClick={handleCheck}>{props.translation}</div>
    );
}