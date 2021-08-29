import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';

const words = [{ id: "4", english: "butterfly", transcription: "[ ˈbʌtəflaɪ ]", russian: "бабочка", tags: "животные", tags_json: "[\"животные\"]" }, { id: "5", english: "hedgehog", transcription: "[ ˈhedʒhɒɡ ]", russian: "ёж", tags: "животные", tags_json: "[\"животные\"]" }, { id: "6", english: "library", transcription: "[ ˈlaɪbrəri ]", russian: "библиотека", tags: "город", tags_json: "[\"город\"]" }, { id: "7", english: "lost property office", transcription: "[ lɒst ˈprɒpəti ˈɒfɪs ]", russian: "бюро находок", tags: "город", tags_json: "[\"город\"]" }, { id: "8", english: "gallery", transcription: "[ ˈɡæləri ]", russian: "галерея", tags: "город, путешествия", tags_json: "[\"город\", \"путешествия\"]" }, { id: "9", english: "traffic", transcription: "[ ˈtræfɪk ]", russian: "движение", tags: "город", tags_json: "[\"город\"]" }, { id: "10", english: "cinema", transcription: "[ ˈsɪnəmə ]", russian: "кино", tags: "город", tags_json: "[\"город\"]" }, { id: "11", english: "accompany", transcription: "[ tuː əˈkʌmpəni ]", russian: "аккомпанировать", tags: "музыка", tags_json: "[\"музыка\"]" }, { id: "12", english: "bagpipe", transcription: "[ ˈbægpaɪp ]", russian: "волынка", tags: "музыка", tags_json: "[\"музыка\"]" }, { id: "13", english: "balalaika", transcription: "[ ˌbæləˈlaɪkə ]", russian: "балалайка", tags: "музыка, культура", tags_json: "[\"музыка\", \"культура\"]" }, { id: "14", english: "bassoon", transcription: "[ bə'suːn ]", russian: "фагот", tags: "музыка", tags_json: "[\"музыка\"]" }, { id: "53", english: "test3", transcription: "", russian: "тест3", tags: "", tags_json: "[]" }, { id: "56", english: "win", transcription: "", russian: "asdsad", tags: "", tags_json: "[]" }];

export default function CardList() {
    return <section className={styles.container}>
        {
            words.map(word =>
                <Card
                    english={word.english}
                    translation={word.russian}
                    transcription={word.transcription.replaceAll(' ', '')}
                    theme={word.tags} >
                </Card>)
        }
    </section >
}