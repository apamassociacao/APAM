import { FC, ReactElement, useState } from 'react';
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

interface PageButtonProps {
  index: number;
}

const Paginacao: FC<PaginacaoProps> = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filter } = useAdocaoFilter();

  const totalPages = Math.ceil(items.length / itemsPerPage),
    maxPreviewedButtons = 3,
    shouldDisplayLast = totalPages > maxPreviewedButtons,
    inEllipsisRange = totalPages > maxPreviewedButtons + 1,
    ellipsisUpperBound = totalPages - 1,
    ellipsisLowerBound = totalPages - maxPreviewedButtons;

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
      return;
    }
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPages);
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const PageButton: FC<PageButtonProps> = ({ index }) => {
    return (
      <span
        className={`pagination__page-button ${currentPage === index ? 'active' : ''}`}
        onClick={() => index && setCurrentPage(index)}
      >
        {index}
      </span>
    );
  };

  type PageSelectButtons = (
    | ReactElement<PageButtonProps, typeof PageButton>
    | undefined
  )[];

  const buttons: PageSelectButtons = Array(maxPreviewedButtons)
    .fill(undefined)
    .map((_, i) => {
      if (i + 1 > totalPages) return;
      let index = i + 1;
      if (currentPage + maxPreviewedButtons >= totalPages)
        index = totalPages - maxPreviewedButtons + i;
      else if (currentPage > maxPreviewedButtons)
        index = currentPage - (maxPreviewedButtons - index);
      return <PageButton key={crypto.randomUUID()} index={index} />;
    });

  let ellipsis;
  if (
    shouldDisplayLast &&
    inEllipsisRange &&
    buttons[0]!.props.index <= ellipsisLowerBound &&
    buttons[buttons.length - 1]!.props.index < ellipsisUpperBound
  )
    ellipsis = <span className="pagination__page-ellipsis">&hellip;</span>;

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
          {buttons}
          {ellipsis}
          {shouldDisplayLast && <PageButton index={totalPages} />}
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
