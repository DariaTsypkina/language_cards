import React, { useEffect, useState } from "react";
import SliderWrapper from "./SliderWrapper";
import Preloader from "../Preloader/Preloader";
import { inject, observer } from "mobx-react";

const Slider = inject('wordsStore')(observer(({ wordsStore }) => {
    const { words, isLoading, error } = wordsStore;

    const [pos, setPos] = useState(0);

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
                words.length > 0
                && <SliderWrapper
                    onShowPrev={showPrevHandler}
                    onShowNext={showNextHandler}
                    number={pos}
                    dataLength={words.length}
                    data={words}
                />
            }
        </Preloader>
    )
}))

export default Slider;
