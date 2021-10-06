import React, { useState, useEffect } from 'react';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import SaveButton from '../SaveButton/SaveButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import styles from './line.module.scss';

export default function WordsListLine(props) {
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

    if (!isSelected || isCanceled) {
        return <tr className={styles.line}>
            <td>{english}</td>
            <td>{translation}</td>
            <td>{transcription}</td>
            <td>
                <ChangeButton change={handleEditClick} />
            </td>
        </tr>
    }
    // else if (isCanceled) {
    //     return <tr className={styles.line}>
    //         <td>{english}</td>
    //         <td>{translation}</td>
    //         <td>{transcription}</td>
    //         <td>
    //             <ChangeButton change={handleEditClick} />
    //         </td>
    //     </tr>
    // }
    else {
        return inputLine;
    }
}