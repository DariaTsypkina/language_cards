import { makeObservable, action, observable } from 'mobx';
import { getWords, addWord, updateWord, deleteWord } from '../utils/api';

class WordsStore {
    words = []
    isLoading = false
    error = null

    constructor() {
        makeObservable(this, {
            words: observable,
            loadWords: action,
            addNewWord: action,
            updateWords: action,
            deleteWords: action
        })
    }

    loadWords = () => {
        this.isLoading = true;
        getWords().then(data => {
            this.isLoading = false;
            this.words = data.reverse();
        })
        .catch(err => {
            this.error = err;
            this.isLoading = false;
        });
    }

    addNewWord = (newWord) => {
        addWord(newWord);
        this.words.push(newWord);
        this.words = this.words.reverse();
    }

    updateWords = (id, newWord) => {
        updateWord(id, newWord);
        const index = this.words.findIndex(item => item.id === id);
        this.words[index] = newWord;
    }

    deleteWords = (id) => {
        deleteWord(id);
        const index = this.words.findIndex(item => item.id === id);
        this.words.splice(Number(index), 1);
    }
}

export default WordsStore;