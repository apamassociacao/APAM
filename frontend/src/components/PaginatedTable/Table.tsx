import {
  FC,
  HTMLAttributes,
  ReactElement,
  useMemo,
  useRef,
  useState,
} from 'react';
import { usePaginatedTable } from '@/hooks/PaginatedTableProvider';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /**
   * Amount of placeholder columns to render if no column
   * header or data is configured.
   */
  placeholderColumns?: number;

  /**
   * Amount of placeholder roww to render if now row data exists.
   */
  placeholderRows?: number;

  /** Should table footer be rendered? */
  showTableFooter?: boolean;
}

interface TextContent {
  text?: string;
}

interface Placeholder {
  placeholder?: boolean;
}

/** Converts data to an user-expected, user-readable format */
function readable(data: unknown): string {
  // TODO: trim number's decimal places
  // TODO: convert Date objects or date strings to Brazillian format
  // TODO: unicode normalization
  // TODO: convertion error text on error
  // TODO: (maybe?) arrays to readable plain text lists
  // TODO: (maybe?) objects to readable plai text ordered lists
  return String(data);
}

const HeaderCell: FC<TextContent & Placeholder> = ({ text, placeholder }) => (
  <th className={`table-header-cell`} scope="col">
    {placeholder && !text ? 'Placeholder' : text}
  </th>
);

const Cell: FC<TextContent & Placeholder> = ({ text, placeholder }) => (
  <td className={`table-cell`}>
    {placeholder && !text ? 'Placeholder' : text}
  </td>
);

const TableRow: FC<HTMLAttributes<HTMLElement>> = ({ children }) => (
  <tr className="table-row">{children}</tr>
);

const HeaderRow: FC<Partial<TableProps>> = ({ placeholderColumns }) => {
  let cells: ReactElement[] = [];
  const table = usePaginatedTable();

  if (!table.headers.length) {
    // placeholder cells
    cells = Array(placeholderColumns)
      .fill(null)
      .map(() => <HeaderCell key={crypto.randomUUID()} />);
  } else {
    cells = table.headers.map((header) => (
      <HeaderCell key={crypto.randomUUID()} text={header} />
    ));
  }

  return <TableRow>{cells}</TableRow>;
};

const TableBody: FC<unknown> = () => {
  const table = usePaginatedTable();
  const [cells, setCells] = useState<ReactElement[]>([]);
  const locked = useRef<boolean>(false);

  useMemo(() => {
    (async () => {
      if (locked.current) return;
      locked.current = true;

      let rows = [];
      if (table.db) {
        const lowerbound =
          table.currentPage === 1
            ? 1
            : table.resultsPerPage * (table.currentPage - 1);
        const upperbound = lowerbound + table.resultsPerPage;
        rows = await table.db.getAll(
          table.storeName,
          IDBKeyRange.bound(lowerbound, upperbound)
        );
      }

      const tempCells = [];
      for (let i = 0; i < table.resultsPerPage; ++i) {
        const data = rows[i];
        tempCells.push(
          <TableRow key={crypto.randomUUID()}>
            {table.headers.map((header) => (
              <Cell
                key={crypto.randomUUID()}
                text={data ? readable(data[header]) : undefined}
              />
            ))}
          </TableRow>
        );
      }

      setCells(tempCells);
      locked.current = false;
    })();
  }, [table]);

  return <>{cells}</>;
};

const Table: FC<TableProps> = (props) => {
  // TODO: add option to sort data
  // TODO: add global unique number generator (uuid npm package?)

  let footer: ReactElement | undefined;
  if (props.showTableFooter) {
    footer = (
      <tfoot className="table-footer">
        <HeaderRow />
      </tfoot>
    );
  }

  return (
    <table className="paginated-table">
      <thead className="table-header">
        <HeaderRow />
      </thead>
      <tbody className="table-body">
        <TableBody />
      </tbody>
      {footer}
    </table>
  );
};

export default Table;
