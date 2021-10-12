import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import './assets/styles/normalize.css';
import styles from './assets/styles/style.module.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import WordsList from './components/WordsList/WordsList';
import CardList from './components/CardList/CardList';
import Error404 from './components/Error_404/Error404';
import Context from './context/Context';

function App() {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWords = () => {
      fetch('/api/words')
          .then(response => {
              if (response.ok) { //Проверяем что код ответа 200
                  return response.json();
              } else {
                  throw new Error('Something went wrong ...');
              }
          })
          .then(result => {
              setIsLoading(false);
              setWords(result.reverse());
          })
          .catch(error => {
            setIsLoading(false);
            setError(error);
        });
  }

  useEffect(() => {
      setIsLoading(true);
      getWords();
  }, [])


  return (
    
    <BrowserRouter>
    <div>
      <Header/>
      <Context.Provider value={{words, isLoading, error, getWords}}>
      <main className={styles.main}>

        <Switch>
          <Route exact path="/game" component={Slider} />
          <Route exact path="/cards" component={CardList} />
          <Route exact path="/" component={WordsList} />
          <Route component={Error404}/>
        </Switch>

      </main>
      </Context.Provider>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

