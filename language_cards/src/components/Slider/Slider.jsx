import React, { useState } from "react";
import SliderWrapper from "./SliderWrapper";

export default function Slider(props) {
    const { data } = props;

    const [pos, setPos] = useState(0);

    const showPrevHandler = () => {
        if (pos > 0) {
            setPos(pos - 1);
        }
    };

    const showNextHandler = () => {
        if (pos >= data.length) {
            return false;
        } else setPos(pos + 1);
        console.log(pos + 1);
    }

    return (
        <SliderWrapper
            onShowPrev={showPrevHandler}
            onShowNext={showNextHandler}
            number={pos + 1}
            dataLength={data.length}
            data={data}
        />
    )
}