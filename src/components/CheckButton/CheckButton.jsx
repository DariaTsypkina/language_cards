import React, { useState, useRef, useEffect } from 'react';
import styles from './button.module.scss';

export default function CheckButton(props) {
    const { handleProgress, id } = props;
    const [checked, setChecked] = useState(false);

    const buttonRef = useRef(null);
    useEffect(() => buttonRef.current && buttonRef.current.focus());

    const handleCheck = () => {
        setChecked(!checked);
    }

    const handleChange = (id) => {
        handleProgress && handleProgress(id);
        handleCheck();
    }

    return (
        !checked
            ? <button className={styles.button} onClick={() => handleChange(id)} ref={buttonRef}>Check</button>
            : <div className={styles.translation} onClick={handleCheck}>{props.translation}</div>
    );
}