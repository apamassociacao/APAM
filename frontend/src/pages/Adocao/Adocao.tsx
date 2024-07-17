import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import Header from '@/components/Header/Header';
import Paginacao from '@/components/Paginacao/Paginacao';
import FilterButton from '@/components/FilterButton/FilterButton';
import { FC } from 'react';
import {
  AdocaoFilterProvider,
  FilterOption,
} from '@/hooks/AdocaoFilterProvider';
import './_adocao.scss';

const cardsData = Array(10)
  .fill(null)
  .map((_, i, arr) => {
    const isCat = i + 1 <= Math.ceil(arr.length / 2);
    const maxAge = 5;

    return {
      titulo: isCat ? 'Gatin' : 'Cachorrin',
      idade: Math.floor(Math.random() * maxAge),
      imageUrl: isCat ? '/images/gato.png' : '/images/cachorro.png',
      tipo: isCat ? FilterOption.cat : FilterOption.dog,
    };
  });

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
