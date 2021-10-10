import React, { useContext } from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import styles from './CardList.module.scss';
import Context from '../../context/Context';

// export default class CardList extends React.Component {
//     static contextType = Context;

//     state = {
//         words: [],
//         isLoading: false,
//         error: null,
//     }

//     componentDidMount() {
//         this.setState({
//             words: this.context.words,
//             isLoading: this.context.isLoading,
//             error: this.context.error
//         })
//     }

//     render() {
//         const { words, isLoading, error } = this.state;
//         return (
//             <Preloader isLoading={isLoading} error={error}>
//                 <section className={styles.container}>
//                     {
//                         words?.map(word =>
//                             <Card
//                                 key={word.id}
//                                 english={word.english}
//                                 translation={word.russian}
//                                 transcription={word.transcription} >
//                             </Card>)
//                     }
//                 </section >
//             </Preloader>
//         )
//     }
// }

export default function CardList() {
    const { words, isLoading, error } = useContext(Context);

    return (
        <Preloader isLoading={isLoading} error={error}>
            <section className={styles.container}>
                {
                    words?.map(word =>
                        <Card
                            key={word.id}
                            english={word.english}
                            translation={word.russian}
                            transcription={word.transcription} >
                        </Card>)
                }
            </section >
        </Preloader>
    )
}