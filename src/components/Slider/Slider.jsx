import React, { useEffect, useState } from "react";
import SliderWrapper from "./SliderWrapper";
import Preloader from "../Preloader/Preloader";

export default function Slider() {
    const [words, setWords] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [pos, setPos] = useState(0);

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
                setWords(result);
            },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                })
    }

    useEffect(() => {
        setIsLoading(true);
        getWords();
    }, [])

    useEffect(() => {
        if (pos > words.length) {
            setPos(0);
        }
    }, [pos, words]);

    const showPrevHandler = () => {
        setPos(pos === 0 ? words.length - 1 : pos - 1);
    }

    const showNextHandler = () => {
        setPos(pos === words.length - 1 ? 0 : pos + 1);
    }

    return (
        <Preloader isLoading={isLoading} error={error}>
            {
                words?.length > 0 && <SliderWrapper
                    onShowPrev={showPrevHandler}
                    onShowNext={showNextHandler}
                    number={pos}
                    dataLength={words.length}
                    data={words}
                />
            }
        </Preloader>
    )

}