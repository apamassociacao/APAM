import { FC, HTMLAttributes, useState } from 'react';

import './_burgerMenu.scss';

const BurgerMenu: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div {...props}>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-hamburger">
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </label>
    </div>
  );
};

export default BurgerMenu;
