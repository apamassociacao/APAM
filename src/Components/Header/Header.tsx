import { FC, HTMLAttributes } from 'react';

import Logo from '/images/logo.png';

import './_header.scss';
import { NavLink } from "react-router-dom";

export type HeaderProps = {} & HTMLAttributes<HTMLHeadingElement>;

const Header: FC<HeaderProps> = ({ ...rest }) =>
(
    <header className="header" {...rest}>
        <div className="header__logo-container">
            <img className="header__logo-container__img" src={Logo}
                alt="APAM - Associação Mato-grossense Protetora dos Animais" />

            <div className="header__logo-container__content">
                <h1>APAM</h1>
                <span>Associação Mato-grossense Protetora dos Animais</span>
            </div>
        </div>

        <nav className="header__nav">
            <ul className="header__nav__list">
                <li className="header__nav__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>

                <li className="header__nav__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to="/a"
                    >
                        Como Ajudar
                    </NavLink>
                </li>

                <li className="header__nav__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to="/b"
                    >
                        Adoção
                    </NavLink>
                </li>

                <li className="header__nav__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to="/c"
                    >
                        Contato
                    </NavLink>
                </li>

                <li className="header__nav__item">
                    <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to="/d"
                    >
                        Ajudar
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;