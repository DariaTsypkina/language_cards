import React, { useState } from 'react';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import SaveButton from '../SaveButton/SaveButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import styles from './line.module.scss';

export default function WordsListLine(props) {
    const { english, translation, transcription, id, handleEdit } = props;

    const [newWord, setNewWord] = useState({
        id: id,
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

    const isDisabled = Object.values(newWord).some((word) => !word);

    const handleSave = () => {
        if (!newWord.english.match(/^[A-Za-z 0-9]*$/)) {
            setErrors({ ...errors, english: 'Latin only' });
        } else if (!newWord.translation.match(/^[а-яё 0-9]+$/i)) {
            setErrors({ ...errors, translation: 'Cyrillic only' });
        } else {
            handleEdit(newWord, id);
            console.log('new word', newWord);
            toggleSelected(!isSelected);
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

    const handleCancel = () => {
        setNewWord({
            id: id,
            english: english,
            translation: translation,
            transcription: transcription
        });
        toggleSelected(!isSelected);
    }

    const handleEditClick = () => {
        toggleSelected(!isSelected);
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
                    placeholder={errors.english && "Please type english word"} />
                <span>{errors.english}</span>
            </td>
            <td>
                <input
                    className={errors.translation ? styles.red : styles.input}
                    type="text"
                    onChange={handleChange}
                    value={newWord.translation}
                    name={'translation'}
                    placeholder={errors.translation && "Please type english word"} />
                <span>{errors.translation}</span>
            </td>
            <td>
                <input
                    className={errors.transcription ? styles.red : styles.input}
                    type="text"
                    onChange={handleChange}
                    value={newWord.transcription}
                    name={'transcription'}
                    placeholder={errors.transcription && "Please type english word"} />
                <span>{errors.transcription}</span>
            </td>
            <td className={styles.buttons}>
                <SaveButton save={handleSave}
                    isDisabled={isDisabled} />
                <CancelChangeButton cancel={handleCancel} />
            </td>
        </tr>;

    return (
        isSelected
            ? inputLine
            : (<tr className={styles.line}>
                <td>{english}</td>
                <td>{translation}</td>
                <td>{transcription}</td>
                <td>
                    <ChangeButton change={handleEditClick} />
                </td>
            </tr>)
    )
}