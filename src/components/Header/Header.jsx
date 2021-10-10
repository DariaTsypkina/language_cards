import React from 'react';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';

export default function Header() {
    return <header className={styles.header}>
        <Menu />
        <div className={styles.info}>
            Learn English with <h1 className={styles.h1}>Language Cards</h1>
        </div>
    </header>
}