import { useState } from 'react';
import AdocaoCard from '../AdocaoCard/AdocaoCard';
import esquerda from '../../../public/images/esquerda.png';
import direita from '../../../public/images/direita.png';
import './_paginacao.scss';

interface CardProps {
  id: number;
  titulo: string;
  idade: string;
  imageUrl: string;
  tipo: string;
}

interface PaginacaoProps {
  itemsPerPage: number;
  items: CardProps[];
}

const Paginacao = ({ itemsPerPage, items }: PaginacaoProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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
    <div>
      <div className="adocaocard__container__cards">
        {currentItems.map((item) => (
          <AdocaoCard
            key={item.id}
            titulo={item.titulo}
            idade={item.idade}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="pagination">
        <span className="pagination__esquerda" onClick={handlePrevPage}>
          <img src={esquerda} alt="" />
        </span>

        <span className="pagination__title">
          {currentPage}...{totalPages}
        </span>

        <span className="pagination__direita" onClick={handleNextPage}>
          <img src={direita} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Paginacao;
