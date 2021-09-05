import React, { useState } from 'react';
import InputLine from '../InputLine/InputLine';
import ChangeButton from '../ChangeButton/ChangeButton';
import styles from './line.module.scss';

export default function WordsListLine(props) {
    const { english, translation, transcription } = props;
    const [isSelected, toggleSelected] = useState(false);

    const handleSelect = () => {
        toggleSelected(!isSelected);
    }

    return (
        !isSelected
            ? <tr className={styles.line}>
                <td>{english}</td>
                <td>{translation}</td>
                <td>{transcription}</td>
                <td>
                    <ChangeButton change={handleSelect} />
                </td>
            </tr>
            : <InputLine
                english={english}
                translation={translation}
                transcription={transcription}
            />
    );
}