import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = ({ isLoading, error, children }) => {
    if (isLoading) {
        return <div className={styles.loader}>Loading...</div>
    }

    if (error) {
        return <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.info__404}>Something went wrong...</div>
                <div className={styles.info__details}>Please, try later</div>
            </div>
        </div>
    }

    return children
};

export default Preloader;