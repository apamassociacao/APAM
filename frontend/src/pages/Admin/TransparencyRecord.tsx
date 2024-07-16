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
        title: 'Transparência',
        buttons: {
          right: <EdgeButton text="Adicionar Registro" />,
        },
      });
    },
    // eslint-disable-next-line
    []
  );

  return <AdminTable />;
};

const TransparencyRecord: FC<unknown> = () => {
  const headers = ['Ano', 'Resgatados', 'Disponíveis', 'Sucessos', 'Zelados'];

  return (
    <AdminPanel>
      <PaginatedTableProvider headers={headers} storeName="CampainRecord">
        <Consumer />
      </PaginatedTableProvider>
    </AdminPanel>
  );
};

export default TransparencyRecord;
