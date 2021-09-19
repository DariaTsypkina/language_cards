import React from "react";
import styles from './error.module.scss';
import cat from '../../assets/images/404_cat.png';

export default function Error404() {
    return (
        <div className={styles.container}>
            <div className={styles.cat__container}>
                <img
                    className={styles.cat__img}
                    src={cat}
                    alt="grumpy_cat"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.info__404}>404</div>
                <div className={styles.info__details}>Uh oh page not found</div>
            </div>
        </div>
    )
}