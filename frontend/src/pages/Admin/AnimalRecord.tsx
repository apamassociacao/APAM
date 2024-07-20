import AdminPanel from '@/components/AdminPanel/AdminPanel';
import EdgeButton from '@/components/AdminPanel/EdgeButton';
import AdminTable from '@/components/AdminTable/AdminTable';
import { PaginatedTableProvider } from '@/components/PaginatedTable';
import { useAdminPanel } from '@/hooks/AdminPanelProvider';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Consumer: FC<unknown> = () => {
  const adminPanel = useAdminPanel();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(
    () => {
      adminPanel.updateSettings({
        title: 'Animais para Adoção',
        bannerText:
          searchParams.has('welcome') && searchParams.get('welcome') === 'true'
            ? 'Seja Bem-Vindo!'
            : undefined,
        buttons: {
          right: <EdgeButton text="Adicionar Animais" />,
        },
      });
    },
    // eslint-disable-next-line
    []
  );

  return <AdminTable />;
};

const AnimalRecord: FC<unknown> = () => {
  const headers = ['Nome', 'Espécie', 'Idade'];

  return (
    <AdminPanel>
      <PaginatedTableProvider headers={headers} storeName="AnimalRecord">
        <Consumer />
      </PaginatedTableProvider>
    </AdminPanel>
  );
};

export default AnimalRecord;
