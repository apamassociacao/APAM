import AdminFormLayout from '@/components/AdminFormLayout/AdminFormLayout';
import AdminPanel from '@/components/AdminPanel/AdminPanel';
import { useAdminPanel } from '@/hooks/AdminPanelProvider';
import { FC, useEffect } from 'react';
import * as AdminInput from '@/components/AdminInput';

const Consumer: FC<unknown> = () => {
  const adminPanel = useAdminPanel();

  const input = {
    title: (
      <AdminInput.SimpleText
        title="Título da Campanha"
        required={true}
        placeholder="--- DIGITE O TÍTULO DA CAMPANHA ---"
      />
    ),
    status: (
      <AdminInput.Select
        title="Status"
        required={true}
        placeholder="--- SELECIONA O STATUS DA CAMPANHA ---"
        options={[
          { id: 'ended', text: 'ENCERRADA' },
          { id: 'ongoing', text: 'ATUAL' },
          { id: 'scheduled', text: 'AGENDADA' },
        ]}
      />
    ),
    expenses: (
      <AdminInput.Number
        title="Despesa"
        required={true}
        placeholder="0.0"
        float={true}
        precision={2}
      />
    ),
    income: (
      <AdminInput.Number
        title="Receita"
        required={true}
        placeholder="0.0"
        float={true}
        precision={2}
      />
    ),
    start: (
      <AdminInput.Datetime
        min={new Date('2000')}
        value={new Date()}
        title="Data Inicial"
        required={true}
      />
    ),
    end: <AdminInput.Datetime title="Data Final" required={true} />,
    description: (
      <AdminInput.LongText
        title="Descrição da Campanha"
        required={true}
        placeholder="--- ESCREVA A DESCRIÇÃO DA CAMPANHA ---"
      />
    ),
  } as const;

  useEffect(
    () => {
      adminPanel.updateSettings({ title: 'Dados da Campanha' });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <AdminFormLayout
      rows={[
        [input.title],
        [input.status],
        [input.expenses, input.income],
        [input.start, input.end],
        [input.description],
      ]}
    />
  );
};

const CampainOverview: FC<unknown> = () => {
  return (
    <AdminPanel>
      <Consumer />
    </AdminPanel>
  );
};

export default CampainOverview;
