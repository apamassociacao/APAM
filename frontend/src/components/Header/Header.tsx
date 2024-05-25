import { FC, HTMLAttributes } from 'react';

import CompleteLogo from '@/components/icons/CompleteLogo.tsx';
import MinimalLogo from '@/components/icons/MinimalLogo.tsx';
import Button from '@/components/Button/Button.tsx';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu.tsx';
import Navbar from '@/components/NavBar/Navbar.tsx';

export type HeaderProps = HTMLAttributes<HTMLHeadingElement>;

import './_header.scss';

const Header: FC<HeaderProps> = ({ ...rest }) => (
  <header className="header" {...rest}>
    <CompleteLogo className="header__complete-logo" />
    <MinimalLogo className="header__minimal-logo" />
    <BurgerMenu className="header__burger-menu" />

    <Navbar />

    <Button className="header__donate-button">Doar</Button>
  </header>
);

export default Header;
