import React, { Children } from 'react';
import styles from './list.module.scss';
import WordsListLine from '../WordsListLine/WordsListLine';
import InputLine from '../WordsListLine/InputLine';
import LoadData from '../LoadData/LoadData';
export default class WordsList extends React.Component {
    constructor(props) {
        super(props);
        this.LoadData = LoadData.bind(this);
    }

    state = {
        words: [],
        isLoading: false,
        error: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.LoadData();
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
                        <InputLine LoadData={this.LoadData} />
                        {
                            words?.reverse().map(word =>
                                <WordsListLine
                                    key={word.id}
                                    id={word.id}
                                    english={word.english}
                                    russian={word.russian}
                                    transcription={word.transcription}
                                    LoadData={this.LoadData}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const Loader = ({ error, isLoading }) => {
    if (error) {
        return <p>{error.message}</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }
    return Children
}