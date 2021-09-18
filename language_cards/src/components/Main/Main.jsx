import React from 'react';
import CardList from '../CardList/CardList';
import WordsList from '../WordsList/WordsList';
import Slider from '../Slider/Slider';

export default function Main() {
    return (
        <div>
            <CardList />
            <Slider />
            <WordsList />
        </div>
    )
}