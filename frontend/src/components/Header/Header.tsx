import { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

import CompleteLogo from '@/components/icons/CompleteLogo.tsx';
import Button from '@/components/Button/Button.tsx';

export type HeaderProps = HTMLAttributes<HTMLHeadingElement>;

import './_header.scss';

const Header: FC<HeaderProps> = ({ ...rest }) => (
  <header className="header" {...rest}>
    <CompleteLogo />

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
            to="/como-ajudar"
          >
            Como Ajudar
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/adocao"
          >
            Adoção
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/contato"
          >
            Contato
          </NavLink>
        </li>

        <li className="header__nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/ajudar"
          >
            Ajudar
          </NavLink>
        </li>
      </ul>
    </nav>

    <Button>Doar</Button>
  </header>
);

export default Header;
