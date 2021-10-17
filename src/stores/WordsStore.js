import { makeAutoObservable } from 'mobx';
import { getWords, addWord, updateWord, deleteWord } from '../utils/api';

class WordsStore {
    words = []
    isLoading = false
    error = null

    constructor() {
        makeAutoObservable(this)
    }

    loadWords = () => {
        this.isLoading = true;
        getWords().then(data => {
            this.words = data.reverse();
            this.isLoading = false;
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