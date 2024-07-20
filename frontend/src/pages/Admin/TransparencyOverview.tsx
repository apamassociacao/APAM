import AdminFormLayout from '@/components/AdminFormLayout/AdminFormLayout';
import AdminPanel from '@/components/AdminPanel/AdminPanel';
import * as AdminInput from '@/components/AdminInput';
import { FC, useEffect } from 'react';
import { useAdminPanel } from '@/hooks/AdminPanelProvider';

const Consumer: FC<unknown> = () => {
  const adminPanel = useAdminPanel();

  const input = {
    year: (
      <AdminInput.Number
        title="Ano"
        required={true}
        placeholder={new Date().getFullYear().toString()}
        float={false}
      />
    ),
    expenses: (
      <AdminInput.Number
        title="Despesas"
        required={true}
        float={true}
        precision={2}
        placeholder="0.0"
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
    rescued: (
      <AdminInput.Number
        title="Animais Resgatados"
        required={true}
        placeholder="0"
        float={false}
      />
    ),
    underCustody: (
      <AdminInput.Number
        title="Animais em Tratamento"
        required={true}
        placeholder="0"
        float={false}
      />
    ),
    adopted: (
      <AdminInput.Number
        title="Casos de Sucesso"
        required={true}
        placeholder="0"
        float={false}
      />
    ),
    sheltered: (
      <AdminInput.Number
        title="Disponíveis para Adoção"
        required={true}
        placeholder="0"
        float={false}
      />
    ),
  } as const;

  const empty = <div key={crypto.randomUUID()}></div>;

  useEffect(
    () => {
      adminPanel.updateSettings({
        title: 'Dados do Registro de Transparência',
      });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <AdminFormLayout
      rows={[
        [input.year, empty],
        [input.expenses, input.income],
        [input.rescued, input.underCustody],
        [input.adopted, input.sheltered],
      ]}
    />
  );
};

const TransparencyOverview: FC<unknown> = () => {
  return (
    <AdminPanel>
      <Consumer />
    </AdminPanel>
  );
};

export default TransparencyOverview;
