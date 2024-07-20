import { SidebarProvider } from '@/hooks/SidebarProvider';
import { FC, HTMLAttributes, type ReactNode } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { AdminPanelProvider, useAdminPanel } from '@/hooks/AdminPanelProvider';

import './_admin-panel.scss';

const Banner: FC<HTMLAttributes<HTMLElement>> = () => {
  const { settings } = useAdminPanel();

  return !settings.bannerText ? undefined : (
    <aside className="admin-panel__banner">
      <h1 className="admin-panel__banner-text">{settings.bannerText}</h1>
    </aside>
  );
};

// TODO: Remove type signatures
const PageTitle: FC<HTMLAttributes<HTMLHeadingElement>> = () => {
  const { settings } = useAdminPanel();

  return !settings.title ? undefined : (
    <h1 className="admin-panel__page-title">{settings.title}</h1>
  );
};

const EdgeButtonContainer: FC<unknown> = () => {
  const { settings } = useAdminPanel();

  const hasAnyValid = (pojo: Record<string, ReactNode>) => {
    return 'left' in pojo || 'middle' in pojo || 'right' in pojo;
  };

  return !settings.buttons || !hasAnyValid(settings.buttons) ? undefined : (
    <div className="admin-panel__edge-btn-container">
      {settings.buttons!.left}
      {settings.buttons!.middle}
      {settings.buttons!.right}
    </div>
  );
};

const AdminPanel: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <SidebarProvider>
      <AdminHeader />
      <AdminHeader sidebar={true} />
      <AdminPanelProvider>
        <div className="admin-panel">
          <Banner />
          <article className="admin-panel__working-area">
            <PageTitle />
            <EdgeButtonContainer />
            <main className="admin-panel__content-frame">{children}</main>
          </article>
        </div>
      </AdminPanelProvider>
    </SidebarProvider>
  );
};

export default AdminPanel;
