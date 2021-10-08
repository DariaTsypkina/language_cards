import React from 'react';
import styles from './list.module.scss';
import WordsListLine from '../WordsListLine/WordsListLine';
import InputLine from '../WordsListLine/InputLine';

export default class WordsList extends React.Component {
    state = {
        words: [],
        isLoading: false,
        error: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        this.loadData();
    }

    loadData = () => {
        fetch('/api/words')
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then((response) => {
                this.setState({
                    words: response,
                    isLoading: false
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { words, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        return (
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
                        <InputLine loadData={this.loadData} />
                        {
                            words?.reverse().map(word =>
                                <WordsListLine
                                    key={word.id}
                                    id={word.id}
                                    english={word.english}
                                    russian={word.russian}
                                    transcription={word.transcription}
                                    loadData={this.loadData}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}