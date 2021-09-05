import React, { useState } from 'react';
import SaveButton from '../SaveButton/SaveButton';
import CancelChangeButton from '../CancelChangeButton/CancelChangeButton';
import WordsListLine from '../WordsListLine/WordsListLine';
import styles from './input.module.scss';

export default function InputLine(props) {
    const { english, translation, transcription } = props;

    const [engValue, setEnglishValue] = useState(english);
    const [translValue, setTranslation] = useState(translation);
    const [transcrValue, setTranscription] = useState(transcription);

    const [isSelected, toggleSelected] = useState(false);
    const [isCanceled, toggleCancel] = useState(false);

    const handleSelect = () => {
        toggleSelected(!isSelected);
    }

    const handleCancel = () => {
        toggleCancel(!isCanceled);
    }

    return (
        isSelected
            ? (
                !isCanceled
                    ? <WordsListLine
                        english={engValue}
                        translation={translValue}
                        transcription={transcrValue}
                    />
                    : <WordsListLine

                    />
            )
            : <tr className={styles.line}>
                <td>
                    <input className={styles.input} type="text" placeholder="Word" onChange={(val) => setEnglishValue(val.target.value)} value={engValue} />
                </td>
                <td>
                    <input className={styles.input} type="text" placeholder="Translation" onChange={(val) => setTranslation(val.target.value)} value={translValue} />
                </td>
                <td>
                    <input className={styles.input} type="text" placeholder="Transcription" onChange={(val) => setTranscription(val.target.value)} value={transcrValue} />
                </td>
                <td className={styles.buttons}>
                    <SaveButton save={handleSelect} />
                    <CancelChangeButton cancel={handleCancel} />
                </td>
            </tr>
    );
}