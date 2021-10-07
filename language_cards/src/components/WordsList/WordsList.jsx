import React from 'react';
import styles from './list.module.scss';
import WordsListLine from '../WordsListLine/WordsListLine';
import json from '../../words.json';

export default class WordsList extends React.Component {
    state = {
        words: []
    }

    componentDidMount() {
        this.setState({ words: json.words });
    }

    handleEdit = (value, id) => {
        const newState = this.state.words.map(el => {
            return el.id === id ? value : el;
        });
        this.setState({
            words: newState
        })
    }

    render() {
        const { words } = this.state;
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
                        {
                            words?.map(word =>
                                <WordsListLine

                                    id={word.id}
                                    english={word.english}
                                    translation={word.translation}
                                    transcription={word.transcription}
                                    handleEdit={this.handleEdit}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}