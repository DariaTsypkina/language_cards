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
        console.log(newWord);
    }

    const handleChange = (e) => {
        const target = e.target;
        const trimmedValue = target.value.trim();

        target.className = trimmedValue.length < 1 ? styles.red : styles.input;

        target.placeholder = trimmedValue.length < 1 ? `Please type ${target.name === 'english' ? 'word' : target.name}` : '';

        setNewWord({
            ...newWord,
            [target.name]: target.value
        });
    }

    const handleCancel = () => {
        toggleCancel(!isCanceled);
    }

    const inputLine =
        <tr className={styles.line}>
            {
                Object.keys(newWord).map((word, index) => {
                    return <td key={index}>
                        <input
                            className={styles.input}
                            type="text"
                            onChange={handleChange}
                            value={newWord[word]}
                            name={word} />
                    </td>
                })
            }
            <td className={styles.buttons}>
                <SaveButton save={handleSelect}
                    words={newWord} />
                <CancelChangeButton cancel={handleCancel} />
            </td>
        </tr>;

    if (isCanceled) {
        return <WordsListLine
            english={english}
            translation={translation}
            transcription={transcription}
        />
    } else if (isSelected) {
        return <WordsListLine
            english={newWord.english}
            translation={newWord.translation}
            transcription={newWord.transcription}
        />
    } else {
        return inputLine;
    }
}