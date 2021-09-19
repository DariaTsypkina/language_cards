import React from "react";
import styles from './menu.module.scss';
import logo_card from '../../assets/logo/logo_card.png';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img
                                src={logo_card}
                                className={styles.logo}
                                alt="logo" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/game">Game</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cards">Cards</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;