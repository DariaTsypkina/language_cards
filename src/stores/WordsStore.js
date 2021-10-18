import { makeAutoObservable} from 'mobx';
import { getWords, addWord, updateWord, deleteWord } from '../utils/api';

class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadWords = async () => {
        if (this.isLoaded && this.isLoading) return;
        
        this.isLoading = true;
        
        try {
            const data = await getWords();
            this.isLoading = false;
            this.words = data.reverse();
            this.isLoaded = true;
        } catch(err) {
            this.isLoading = false;
            this.error = err;
            this.isLoaded = true;
        }
    }

    addNewWord = async (newWord) => {
        try {
            await addWord(newWord);
        } catch(err) {
            this.error = err;
        }
        
        const data = await getWords();
        this.isLoading = false;
        
        this.words = data.reverse();
        this.isLoaded = true;
    }

    addNewWord = (newWord) => {
        addWord(newWord);
        this.words = [newWord, ...this.words];
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