import { inject, observer } from 'mobx-react';
import React from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import styles from './CardList.module.scss';

const CardList = inject('wordsStore')(observer(({ wordsStore }) => {
    const { words, isLoading, error } = wordsStore;
    return (
        <Preloader isLoading={isLoading} error={error}>
            <section className={styles.container}>
                {
                    words.map(word =>
                        <Card
                            key={word.id}
                            english={word.english}
                            translation={word.russian}
                            transcription={word.transcription} >
                        </Card>)
                }
            </section>
        </Preloader>
    )
}))

export default CardList;