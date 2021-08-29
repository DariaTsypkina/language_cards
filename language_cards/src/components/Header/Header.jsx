import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title__container}>
            <h1 className={styles.title}>Learn English with <span className={styles.title_red}>Language Cards</span></h1>
        </div>
    </header>
}