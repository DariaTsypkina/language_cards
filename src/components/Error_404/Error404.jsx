import React from "react";
import styles from './error.module.scss';

export default function Error404() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.info__404}>404</div>
                <div className={styles.info__details}>Uh oh page not found</div>
            </div>
        </div>
    )
}