import { FC, useState } from 'react';
import AdocaoCard from '../AdocaoCard/AdocaoCard';
import './_paginacao.scss';
import { FilterOption, useAdocaoFilter } from '@/hooks/AdocaoFilterProvider';

interface CardProps {
  titulo: string;
  idade: number;
  imageUrl: string;
  tipo: string;
}

interface PaginacaoProps {
  itemsPerPage: number;
  items: CardProps[];
}

const Paginacao: FC<PaginacaoProps> = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filter } = useAdocaoFilter();

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items
    .filter((item) =>
      filter !== FilterOption.all ? item.tipo === filter : item
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__cards">
        {currentItems.map((item) => (
          <AdocaoCard
            key={crypto.randomUUID()}
            titulo={item.titulo}
            idade={item.idade}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="pagination__select">
        <span
          className="pagination__back pagination__button"
          onClick={handlePrevPage}
        >
          <img src="/images/esquerda.png" />
        </span>
        <span className="pagination__counter">
          {currentPage}...{totalPages}
        </span>
        <span
          className="pagination__forward pagination__button"
          onClick={handleNextPage}
        >
          <img src="/images/direita.png" />
        </span>
      </div>
    </div>
  );
};

export default Paginacao;
