import React, { useState } from 'react';
import styles from './button.module.scss';

export default function CheckButton(props) {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    }

    return (
        !checked
            ? <button className={styles.button} onClick={handleCheck}>Check</button>
            : <div className={styles.translation} onClick={handleCheck}>{props.translation}</div>
    );
}