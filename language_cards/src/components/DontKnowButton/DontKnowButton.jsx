import React from 'react';
import styles from './button.module.scss';

export default class DontKnowButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>Don't know</button>
        )
    }
}