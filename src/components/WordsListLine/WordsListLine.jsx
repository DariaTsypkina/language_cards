import React, { useEffect, useState } from 'react';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import SaveButton from '../SaveButton/SaveButton';
import ChangeButton from '../ChangeButton/ChangeButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './line.module.scss';

export default function WordsListLine(props) {
    const { english, russian, transcription, id } = props;

    const [newWord, setNewWord] = useState({
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

    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        Object.values(newWord).some((word) => !word)
            ? setIsDisabled(true)
            : setIsDisabled(false)
    }, [newWord])

    const handleSave = (id) => {
        if (!newWord.english.match(/^[A-Za-z 0-9]*$/)) {
            setErrors({ ...errors, english: 'Latin only' });
        } else if (!newWord.russian.match(/^[а-яё 0-9]+$/i)) {
            setErrors({ ...errors, russian: 'Cyrillic only' });
        } else {
            props.updateWord(id, newWord);
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
        props.deleteWord(id);
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