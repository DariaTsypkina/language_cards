import React, { useState, useEffect } from 'react';
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
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        Object.values(newWord).some((word) => word.trim().length < 1)
            ? setIsDisabled(true) : setIsDisabled(false);
    }, [newWord]);

    const handleSave = () => {
        toggleSelected(!isSelected);
        validateInput(newWord) ? console.log('new word', newWord) : console.log('Please check typed values!');
    }

    const handleChange = (e) => {
        const target = e.target;
        const length = target.value.trim().length;

        target.className = length < 1 ? styles.red : styles.input;

        target.placeholder = length < 1 ? `Please type ${target.name === 'english' ? 'word' : target.name}` : '';

        setNewWord({
            ...newWord,
            [target.name]: target.value
        });
    }

    const validateInput = (word) => {
        if (!word.english.match(/^[A-Za-z0-9]*$/)) {
            alert('Word should be typed in English');
            return false;
        }
        if (!word.translation.match(/^[а-яё0-9]+$/i)) {
            alert('Translation should be typed in Russian');
            return false;
        }
        return true;
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
                <SaveButton save={handleSave}
                    isDisabled={isDisabled} />
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