import { FC, HTMLAttributes } from 'react';

import { useSidebar } from '@/hooks/SidebarProvider.tsx';

import './_burgerMenu.scss';

const BurgerMenu: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div {...props}>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={isOpen}
        onChange={toggleSidebar}
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
