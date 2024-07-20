import AdminFormLayout from '@/components/AdminFormLayout/AdminFormLayout';
import AdminPanel from '@/components/AdminPanel/AdminPanel';
import * as AdminInput from '@/components/AdminInput';
import { FC, useEffect } from 'react';
import { useAdminPanel } from '@/hooks/AdminPanelProvider';

const Consumer: FC<unknown> = () => {
  const adminPanel = useAdminPanel();

  const input = {
    name: (
      <AdminInput.SimpleText
        key={crypto.randomUUID()}
        title="Nome do Animal"
        placeholder="--- DIGITE O NOME DO ANIMAL ---"
        required={true}
      />
    ),
    status: (
      <AdminInput.Select
        key={crypto.randomUUID()}
        title="Status"
        placeholder="--- SELECIONE O STATUS DO ANIMAL ---"
        required={true}
        options={[
          { id: 'adopted', text: 'ADOTADO' },
          { id: 'sheltered', text: 'ABRIGADO' },
          { id: 'deceased', text: 'ÓBITO' },
        ]}
      />
    ),
    species: (
      <AdminInput.Select
        key={crypto.randomUUID()}
        title="Espécie"
        placeholder="--- SELECIONE A ESPÉCIE DO ANIMAL ---"
        required={true}
        options={[
          { id: 'cat', text: 'GATO' },
          { id: 'dog', text: 'CACHORRO' },
        ]}
      />
    ),
    gender: (
      <AdminInput.Select
        key={crypto.randomUUID()}
        title="Gênero"
        placeholder="--- SELECIONE O GÊNERO DO ANIMAL ---"
        required={true}
        options={[
          { id: 'male', text: 'MACHO' },
          { id: 'female', text: 'FÊMEA' },
        ]}
      />
    ),
    age: (
      <AdminInput.Number
        key={crypto.randomUUID()}
        title="Idade"
        placeholder="--- SELECIONE A IDADE DO ANIMAL ---"
        float={false}
        required={true}
      />
    ),
  } as const;

  useEffect(
    () => {
      adminPanel.updateSettings({ title: 'Dados do Animal' });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <AdminFormLayout
      rows={[
        [input.name],
        [input.status],
        [input.species],
        [input.gender],
        [input.age],
      ]}
      sideElement={<AdminInput.Image title="Foto de Perfil" required={true} />}
    />
  );
};

const AnimalOverview: FC<unknown> = () => {
  return (
    <AdminPanel>
      <Consumer />
    </AdminPanel>
  );
};

export default AnimalOverview;
