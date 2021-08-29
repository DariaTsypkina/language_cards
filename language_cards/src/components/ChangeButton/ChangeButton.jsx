import React from 'react';
import styles from './button.module.scss';

export default class ChangeButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>&#9998;</button>
        )
    }
}