import React, { useState } from 'react';
import SaveButton from '../SaveButton/SaveButton';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import WordsListLine from '../WordsListLine/WordsListLine';
import styles from './input.module.scss';

export default function InputLine(props) {
    const { english, translation, transcription } = props;

    const [newWord, setNewWord] = useState({
        english: english,
        translation: translation,
        transcription: transcription
    });

    const [isSelected, toggleSelected] = useState(false);
    const [isCanceled, toggleCancel] = useState(false);

    const handleSelect = () => {
        toggleSelected(!isSelected);
    }

    const handleCancel = () => {
        toggleCancel(!isCanceled);
    }

    const inputLine =
        <tr className={styles.line}>
            <td>
                <input
                    className={styles.input}
                    type="text"
                    onChange={val => setNewWord({...newWord, english: val.target.value})}
                    value={newWord.english} />
            </td>
            <td>
                <input
                    className={styles.input}
                    type="text"
                    onChange={val => setNewWord({...newWord, translation: val.target.value})}
                    value={newWord.translation} />
            </td>
            <td>
                <input
                    className={styles.input}
                    type="text"
                    onChange={val => setNewWord({...newWord, transcription: val.target.value})}
                    value={newWord.transcription} />
            </td>
            <td className={styles.buttons}>
                <SaveButton save={handleSelect} />
                <CancelChangeButton cancel={handleCancel} />
            </td>
        </tr>;

    return (
        isCanceled
            ? <WordsListLine
                english={english}
                translation={translation}
                transcription={transcription}
            />
            : isSelected
                ? <WordsListLine
                    english={newWord.english}
                    translation={newWord.translation}
                    transcription={newWord.transcription}
                />
                : inputLine
    );
}