import { makeAutoObservable } from 'mobx';
import { getWords, addWord, updateWord, deleteWord } from '../utils/api';

class WordsStore {
    words = []
    isLoading = false
    error = null

    constructor() {
        makeAutoObservable(this)
    }

    _catchError = (err) => {
        this.isLoading = false;
        return this.error = err;
    }

    loadWords = () => {
        this.isLoading = true;
        getWords().then(data => {
            this.setWords(data.reverse());
            this.isLoading = false;
        })
        .catch(err => this._catchError(err));
    }

    addNewWord = (english, russian, transcription) => {
        addWord(english, russian, transcription).then(this.loadWords());
        window.location.reload();
    }

    updateWords = (id, english, russian, transcription) => {
        updateWord(id, english, russian, transcription)
        .then(this.loadWords());
        window.location.reload();
    }

    deleteWords = (id) => {
        deleteWord(id).then(this.loadWords());
        window.location.reload();
    }

    setWords = (data) => {
        this.words = data;
    }
}

export default WordsStore;