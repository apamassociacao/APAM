import { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';

import './_navbar.scss';

export interface NavbarProps extends HTMLAttributes<HTMLDetailsElement> {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className, ...rest }) => (
  <nav className={`nav ${className ? className : ''}`} {...rest}>
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/como-ajudar"
        >
          Como Ajudar
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/adocao"
        >
          Adoção
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/contato"
        >
          Contato
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/ajudar"
        >
          Ajudar
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
