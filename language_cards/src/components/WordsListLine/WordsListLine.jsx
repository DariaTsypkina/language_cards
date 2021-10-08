import React, { useState } from 'react';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import SaveButton from '../SaveButton/SaveButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './line.module.scss';

export default function WordsListLine(props) {
    const { english, russian, transcription, id, loadData } = props;

    const [newWord, setNewWord] = useState({
        id: id,
        english: english,
        russian: russian,
        transcription: transcription
    });

    const [errors, setErrors] = useState({
        english: false,
        russian: false,
        transcription: false
    });

    const [isSelected, toggleSelected] = useState(false);

    const isDisabled = Object.values(newWord).some((word) => !word);

    const handleSave = (id) => {
        if (!newWord.english.match(/^[A-Za-z 0-9]*$/)) {
            setErrors({ ...errors, english: 'Latin only' });
        } else if (!newWord.russian.match(/^[а-яё 0-9]+$/i)) {
            setErrors({ ...errors, russian: 'Cyrillic only' });
        } else {
            console.log(newWord)
            fetch(`/api/words/${id}/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    id: newWord.id,
                    english: newWord.english,
                    russian: newWord.russian,
                    transcription: newWord.transcription
                })
            })
                .then(response => {
                    if (response.ok) { //Проверяем что код ответа 200
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                })
                .then(loadData);
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
            russian: russian,
            transcription: transcription
        });
        setErrors({
            english: false,
            russian: false,
            transcription: false
        });
        toggleSelected(!isSelected);
    }

    const handleEditClick = () => {
        toggleSelected(!isSelected);
    }

    const handleDelete = (id) => {
        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: newWord.english,
                russian: newWord.russian,
                transcription: newWord.transcription,
                tags: []
            })
        })
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(loadData);
    }

    return (
        isSelected
            ? <tr className={styles.line}>
                <td className={styles.cell}>
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
                <td className={styles.cell}>
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
                <td className={styles.cell}>
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
                    <SaveButton save={() => handleSave(id)}
                        isDisabled={isDisabled} />
                    <CancelChangeButton cancel={handleCancel} />
                </td>
            </tr>
            : (<tr className={styles.line}>
                <td>{english}</td>
                <td>{russian}</td>
                <td>{transcription}</td>
                <td>
                    <ChangeButton change={handleEditClick} />
                    <DeleteButton handleDelete={() => handleDelete(id)} />
                </td>
            </tr>)
    )
}