import { HTMLAttributes, FC, DetailedHTMLProps } from 'react';

import Header from '@/components/Header/Header.tsx';
import { useSidebar } from '@/hooks/SidebarProvider.tsx';

import './_sidebar.scss';
import Navbar from '@/components/NavBar/Navbar.tsx';
import Button from '@/components/Button/Button.tsx';

type AsideProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Sidebar: FC<AsideProps> = (props) => {
  const { isOpen } = useSidebar();
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'close'}`} {...props}>
      <Header />
      <Navbar className="nav-from-sidebar" />
      <div className="wrapper-button">
        <Button>Doar</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
