import React from 'react';
import styles from './list.module.scss';
import WordsListLine from '../WordsListLine/WordsListLine';
import InputLine from '../WordsListLine/InputLine';
import Preloader from '../Preloader/Preloader';
import { observer, inject } from 'mobx-react';

const WordsList = inject('wordsStore')(observer(({ wordsStore }) => {
    const { words, isLoading, error } = wordsStore;

    return (
        <Preloader isLoading={isLoading} error={error}>
            <div className={styles.container}>
                <table className={styles.table}>
                    <caption className={styles.table__title}>Words List</caption>
                    <thead className={styles.thead}>
                        <tr className={styles.table__header}>
                            <th scope="col">Word</th>
                            <th scope="col">Translation</th>
                            <th scope="col">Transcription</th>
                            <th scope="col">Let's correct</th>
                        </tr>
                    </thead>
                    <tbody>
                        <InputLine />
                        {
                            words.map(word =>
                                <WordsListLine
                                    key={word.id}
                                    id={word.id}
                                    english={word.english}
                                    russian={word.russian}
                                    transcription={word.transcription}
                                    updateWord={wordsStore.updateWords}
                                    deleteWord={wordsStore.deleteWords}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </Preloader>
    );
}))

export default WordsList;