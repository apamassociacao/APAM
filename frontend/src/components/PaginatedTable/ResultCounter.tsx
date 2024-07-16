import { usePaginatedTable } from '@/hooks/PaginatedTableProvider';
import { FC } from 'react';

const ResultCounter: FC<unknown> = () => {
  const { totalResults, resultsPerPage } = usePaginatedTable();

  return (
    <aside className="table-result-counter">
      <p className="text">
        Exibindo <span className="number per-page">{resultsPerPage}</span>{' '}
        resultados de <span className="number total">{totalResults}</span>
      </p>
    </aside>
  );
};

export default ResultCounter;
