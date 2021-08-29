import React from 'react';
import styles from './button.module.scss';

export default class KnowButton extends React.Component {
    render() {
        return (
            <button className={styles.button}>Know!</button>
        )
    }
}