import React from 'react';
import SaveButton from '../SaveButton/SaveButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import styles from './line.module.scss';

export default class WordsListLine extends React.Component {
    render() {
        const { id, english, translation, transcription, theme } = this.props;
        return (
            <tr className={styles.line}>
                <td>{id}</td>
                <td>{english}</td>
                <td>{translation}</td>
                <td>{transcription}</td>
                <td>{theme}</td>
                <td>
                    <ChangeButton />
                    <DeleteButton />
                </td>
            </tr>
        );
    }
}