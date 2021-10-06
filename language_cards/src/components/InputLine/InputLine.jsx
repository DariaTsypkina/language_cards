import React, { useState, useEffect } from 'react';
import SaveButton from '../SaveButton/SaveButton';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import WordsListLine from '../WordsListLine/WordsListLine';
import styles from './input.module.scss';

export default function InputLine(props) {
    const { english, translation, transcription, id, handleEdit } = props;

    const [newWord, setNewWord] = useState({
        english: english,
        translation: translation,
        transcription: transcription
    });

    const [errors, setErrors] = useState({
        english: false,
        translation: false,
        transcription: false
    });

    const [isSelected, toggleSelected] = useState(false);
    const [isCanceled, toggleCancel] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        Object.values(newWord).some((word) => word.trim().length < 1)
            ? setIsDisabled(true) : setIsDisabled(false);
    }, [newWord]);

    const handleSave = () => {
        validateInput();
    }

    const handleChange = (e) => {
        const target = e.target;
        const length = target.value.trim().length;

        setNewWord({
            ...newWord,
            [target.name]: target.value
        });

        setErrors({
            ...errors,
            [target.name]: length < 1
        });
    }

    const validateInput = () => {
        if (!newWord.english.match(/^[A-Za-z0-9]*$/)) {
            setErrors({ ...errors, english: 'Latin only' });
        } else if (!newWord.translation.match(/^[а-яё0-9]+$/i)) {
            setErrors({ ...errors, translation: 'Cyrillic only' });
        } else {
            console.log('new word', newWord);
            handleEdit(newWord, id);
            toggleSelected(!isSelected);
        }
    }

    const handleCancel = () => {
        toggleCancel(!isCanceled);
    }

    const handleEditClick = () => toggleSelected(!isSelected);

    const inputLine =
        <tr className={styles.line}>
            {
                Object.keys(newWord).map((word, index) => {
                    return <td key={index}>
                        <input
                            className={errors[word] ? styles.red : styles.input}
                            type="text"
                            onChange={handleChange}
                            value={newWord[word]}
                            name={word}
                            placeholder={errors[word] ? `Please type ${word === 'english' ? 'word' : word}` : ''} />
                        <span>{errors[word]}</span>
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
            english={english}
            translation={translation}
            transcription={transcription}
        />
    } else {
        return inputLine;
    }
}