import React, {useEffect} from 'react';
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
import { inject, observer } from 'mobx-react';

const App = inject('wordsStore')(observer(({wordsStore}) => {
  useEffect(() => {
    wordsStore.loadWords();
  }, [wordsStore]);

  return (
    <BrowserRouter>
     <div>
       <Header/>
  
       <main className={styles.main}>

       <Switch>
         <Route exact path="/game" component={Slider} />
         <Route exact path="/cards" component={CardList} />
         <Route exact path="/" component={WordsList} />
         <Route component={Error404}/>
       </Switch>

       </main>
     </div>
   </BrowserRouter>
  )
}));

export default App;