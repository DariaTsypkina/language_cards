import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = ({ isLoading, error, children }) => {
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return children
};

export default Preloader;