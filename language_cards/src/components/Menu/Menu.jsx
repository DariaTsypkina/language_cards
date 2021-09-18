import React from "react";
import styles from './menu.module.scss';
import logo_card from '../../assets/logo/logo_card.png';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Slider from "../Slider/Slider";

const Menu = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <img
                                src={logo_card}
                                className={styles.logo} />
                        </li>
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="game">Game</Link>
                        </li>
                        <li>
                            <Link to="cards">Cards</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                        Main
                    </Route>
                    <Route exact path="/game">
                        <Slider />
                    </Route>
                    <Route exact path="/cards">
                        Cards
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Menu;