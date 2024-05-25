import { HTMLAttributes, FC, DetailedHTMLProps } from 'react';

import Header from '@/components/Header/Header.tsx';
import { useSidebar } from '@/hooks/SidebarProvider.tsx';

import './_sidebar.scss';

type AsideProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Sidebar: FC<AsideProps> = (props) => {
  const { isOpen } = useSidebar();
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'close'}`} {...props}>
      <Header />
    </aside>
  );
};

export default Sidebar;
