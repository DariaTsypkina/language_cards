import React from 'react';
import styles from './Card.module.scss';
import DontKnowButton from '../DontKnowButton/DontKnowButton';
import KnowButton from '../KnowButton/KnowButton';

export default class Card extends React.Component {
    render() {
        const { english, translation, transcription, theme } = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.card__word}>{english}</div>
                <div className={styles.card__translation}>Перевод: {translation}</div>
                <div className={styles.card__transcription}>Транскрипция: {transcription}</div>
                <div className={styles.card__theme}>Тема: {theme}</div>
                <div className={styles.buttons}>
                    <DontKnowButton />
                    <KnowButton />
                </div>
            </div>
        );
    }
}