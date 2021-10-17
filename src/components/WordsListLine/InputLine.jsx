import React, { useState } from 'react';
import SaveButton from '../SaveButton/SaveButton';
import styles from './line.module.scss';
import { observer, inject } from 'mobx-react';

const InputLine = inject('wordsStore')(observer(({ wordsStore }) => {
    const [newWord, setNewWord] = useState({
        english: '',
        russian: '',
        transcription: ''
    });

    const [errors, setErrors] = useState({
        english: false,
        russian: false,
        transcription: false
    });

    const isDisabled = Object.values(newWord).some((word) => !word);

    const handleSaveNew = () => {
        if (!newWord.english.match(/^[A-Za-z 0-9]*$/)) {
            setErrors({ ...errors, english: 'Latin only' });
        } else if (!newWord.russian.match(/^[а-яё 0-9]+$/i)) {
            setErrors({ ...errors, russian: 'Cyrillic only' });
        } else {
            wordsStore.addNewWord(newWord.english, newWord.russian, newWord.transcription);
            setNewWord({
                english: '',
                russian: '',
                transcription: ''
            })
        }
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

    const inputLine =
        <tr className={styles.line}>
            <td>
                <input
                    className={errors.english ? styles.red : styles.input}
                    type="text"
                    onChange={handleChange}
                    value={newWord.english}
                    name={'english'}
                    placeholder={errors.english ? "Please type english word" : ''} />
                <br />
                <span className={errors.english ? styles.error : ''}>{errors.english}</span>
            </td>
            <td>
                <input
                    className={errors.russian ? styles.red : styles.input}
                    type="text"
                    onChange={handleChange}
                    value={newWord.russian}
                    name={'russian'}
                    placeholder={errors.russian ? "Please type translation" : ''} />
                <br />
                <span className={errors.russian ? styles.error : ''}>{errors.russian}</span>
            </td>
            <td>
                <input
                    className={errors.transcription ? styles.red : styles.input}
                    type="text"
                    onChange={handleChange}
                    value={newWord.transcription}
                    name={'transcription'}
                    placeholder={errors.transcription ? "Please type transcription" : ''} />
                <br />
                <span className={errors.transcription ? styles.error : ''}>{errors.transcription}</span>
            </td>
            <td className={styles.buttons}>
                <SaveButton save={handleSaveNew}
                    isDisabled={isDisabled} />
            </td>
        </tr>;

    return (
        inputLine
    )
}))

export default InputLine;