import React from 'react';
import SaveButton from '../SaveButton/SaveButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import styles from './line.module.scss';

export default class WordsListLine extends React.Component {
    render() {
        const { id, english, translation, transcription, theme } = this.props;
        return (
            <div className={styles.line}>
                <div>{id}</div>
                <div>{english}</div>
                <div>{translation}</div>
                <div>{transcription}</div>
                <div>{theme}</div>
                <div>
                    <ChangeButton />
                    <DeleteButton />
                </div>
            </div>
        );
    }
}