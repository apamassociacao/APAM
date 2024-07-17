import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import gato from '../../../public/images/gato.png';
import cachorro from '../../../public/images/cachorro.png';
import Header from '@/components/Header/Header';
import Paginacao from '@/components/Paginacao/Paginacao';
import FilterButton from '@/components/FilterButton/FilterButton';
import { FC } from 'react';
import {
  AdocaoFilterProvider,
  FilterOption,
} from '@/hooks/AdocaoFilterProvider';
import './_adocao.scss';

const cardsData = [
  {
    id: 1,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
  {
    id: 2,
    titulo: 'Cachorrin',
    idade: '2 anos',
    imageUrl: cachorro,
    tipo: FilterOption.dog,
  },
  {
    id: 3,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
  {
    id: 4,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
  {
    id: 5,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
  {
    id: 6,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
  {
    id: 8,
    titulo: 'Gatin',
    idade: '1 ano',
    imageUrl: gato,
    tipo: FilterOption.cat,
  },
];

const Adocao: FC<unknown> = () => (
  <main className="adocao">
    <SidebarProvider>
      <Sidebar />
      <section className="adocao">
        <div className="adocao__container">
          <Header />
          <AdocaoFilterProvider>
            <div className="adocao__container__body">
              <h1 className="adocao__container__body__title">
                Busque por categoria
              </h1>
              <div className="adocao__container__body__title__subtitle">
                <FilterButton label="Gatos" filterType="cat" />
                <FilterButton label="Cachorros" filterType="dog" />
              </div>
              <Paginacao items={cardsData} itemsPerPage={3} />
            </div>
          </AdocaoFilterProvider>
        </div>
      </section>
    </SidebarProvider>
  </main>
);

export default Adocao;
