import { HTMLAttributes, FC, DetailedHTMLProps } from 'react';

import './_sidebar.scss';
import { useSidebar } from '@/hooks/SidebarProvider.tsx';

type AsideProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Sidebar: FC<AsideProps> = (props) => {
  const { isOpen } = useSidebar();
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'close'}`} {...props}>
      <h1>Sidebar</h1>
    </aside>
  );
};

export default Sidebar;
