import AdminPanel from '@/components/AdminPanel/AdminPanel';
import EdgeButton from '@/components/AdminPanel/EdgeButton';
import AdminTable from '@/components/AdminTable/AdminTable';
import { useAdminPanel } from '@/hooks/AdminPanelProvider';
import { PaginatedTableProvider } from '@/hooks/PaginatedTableProvider';
import { FC, useEffect } from 'react';

const Consumer: FC<unknown> = () => {
  const adminPanel = useAdminPanel();

  useEffect(
    () => {
      adminPanel.updateSettings({
        title: 'Campanhas',
        buttons: {
          right: <EdgeButton text="Adicionar Campanha" />,
        },
      });
    },
    // eslint-disable-next-line
    []
  );

  return <AdminTable />;
};

const CampainRecord: FC<unknown> = () => {
  const headers = ['Título', 'Data Início', 'Data Final', 'Status'];

  return (
    <AdminPanel>
      <PaginatedTableProvider headers={headers} storeName="CampainRecord">
        <Consumer />
      </PaginatedTableProvider>
    </AdminPanel>
  );
};

export default CampainRecord;
