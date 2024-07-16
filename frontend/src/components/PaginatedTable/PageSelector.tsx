import { usePaginatedTable } from '@/hooks/PaginatedTableProvider';
import { FC, ReactElement } from 'react';

interface PageSelector {
  /** Amount of visible, clickable, page numbers. Has to be odd! */
  visible?: number;
}

interface PageButton {
  /** Child tree position (as in a queue); 1-based index */
  index: number;
}

const PageSelector: FC<PageSelector> = ({ visible }) => {
  const { toPage, previousPage, nextPage, currentPage, totalPages } =
    usePaginatedTable();

  if (visible && visible % 2 !== 1)
    throw new TypeError('Amount of visible pages has to be an odd integer');

  // TODO: account for the "total results" to "results per page" ratio
  // TODO: use differently-looking placeholders when possible amount of pages
  //       is less than minimum displayable
  /** Always odd */
  const visiblePages = visible || 5;
  /** Offset until jump buttons are invisible */
  const visibleOffset = Math.ceil(visiblePages / 2);
  /** Offset that determines which numbers will be rendered */
  const buttonRenderOffset = Math.floor(visiblePages / 2);

  const tolast = (
    <button
      type="button"
      disabled={currentPage >= totalPages}
      onClick={() => toPage(totalPages)}
      className="jump-button to-last"
    >
      {'>>'}
    </button>
  );

  const tofirst = (
    <button
      type="button"
      disabled={currentPage <= 1}
      onClick={() => toPage(1)}
      className="jump-button to-first"
    >
      {'<<'}
    </button>
  );

  const next = (
    <button
      type="button"
      disabled={currentPage >= totalPages}
      onClick={() => nextPage()}
      className="jump-button next"
    >
      {'>'}
    </button>
  );

  const previous = (
    <button
      type="button"
      disabled={currentPage <= 1}
      onClick={() => previousPage()}
      className="jump-button previous"
    >
      {'<'}
    </button>
  );

  const PageButton: FC<PageButton> = ({ index }) => {
    /** Going to **previous** page will not change numbers */
    const reachedLeftWall = currentPage <= visibleOffset;
    /** Going to **next** page will not change numbers */
    const reachedRightWall = currentPage >= totalPages - visibleOffset;

    let pageNumber: number;
    if (reachedLeftWall) {
      pageNumber = index;
    } else if (reachedRightWall) {
      pageNumber = totalPages - visiblePages + index;
    } else if (currentPage === buttonRenderOffset) {
      // Will be the one centered
      pageNumber = currentPage;
    } else {
      // Surrounding the centered number
      const min = currentPage - buttonRenderOffset;
      pageNumber = min + index;
    }

    let active: boolean;
    if (reachedLeftWall) {
      active = index === currentPage;
    } else if (reachedRightWall) {
      active = index === visiblePages - (totalPages - currentPage);
    } else {
      // The one centered
      active = index === buttonRenderOffset;
    }

    return (
      <button
        className={`page-button ${active ? 'active' : ''}`}
        onClick={() => toPage(pageNumber)}
        type="button"
      >
        {pageNumber}
      </button>
    );
  };

  const buttons: ReactElement[] = [];
  for (let i = 1; i <= visiblePages; ++i)
    buttons.push(<PageButton key={crypto.randomUUID()} index={i} />);

  return (
    <div className="page-selector">
      {tofirst}
      {previous}
      <div className="page-button-container">{buttons}</div>
      {next}
      {tolast}
    </div>
  );
};

export default PageSelector;
