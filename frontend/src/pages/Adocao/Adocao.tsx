import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import gato from '../../../public/images/gato.png';
import cachorro from '../../../public/images/cachorro.png';
import Header from '@/components/Header/Header';
import Paginacao from '@/components/Paginacao/Paginacao';
import FilterButton from '@/components/FilterButton/FilterButton';
import { FC, useState } from 'react';

import './_adocao.scss';

const cardsData = [
  { id: 1, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
  {
    id: 2,
    titulo: 'Cachorrin',
    idade: '2 anos',
    imageUrl: cachorro,
    tipo: 'cachorro',
  },
  { id: 3, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
  { id: 4, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
  { id: 5, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
  { id: 6, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
  { id: 7, titulo: 'Gatin', idade: '1 ano', imageUrl: gato, tipo: 'gato' },
];

const Adocao: FC<unknown> = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredItems =
    filter === 'all'
      ? cardsData
      : cardsData.filter((item) => item.tipo === filter);

  return (
    <main className="adocao">
      <SidebarProvider>
        <Sidebar />
        <section className="adocao">
          <div className="adocao__container">
            <Header />
            <div className="adocao__container__body">
              <h1 className="adocao__container__body__title">
                Busque por categoria
              </h1>
              <div className="adocao__container__body__title__subtitle">
                <FilterButton
                  onClick={() => setFilter('gato')}
                  label="Gatos"
                  isActive={filter === 'gato'}
                />
                <FilterButton
                  onClick={() => handleFilterChange('cachorro')}
                  label="Cachorros"
                  isActive={filter === 'cachorro'}
                />
              </div>
              <Paginacao items={filteredItems} itemsPerPage={3} />
            </div>
          </div>
        </section>
      </SidebarProvider>
    </main>
  );
};

export default Adocao;
