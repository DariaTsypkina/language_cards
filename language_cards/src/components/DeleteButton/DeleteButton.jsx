import React from 'react';
import styles from './button.module.scss';

export default class DeleteButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>&#10006;</button>
        )
    }
}