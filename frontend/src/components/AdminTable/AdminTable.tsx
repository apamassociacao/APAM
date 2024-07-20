import { FC } from 'react';
import { Table } from '../PaginatedTable';
import ResultCounter from '../PaginatedTable/ResultCounter';
import PageSelector from '../PaginatedTable/PageSelector';

import './_paginated-table.scss';
import './_admin-table.scss';

const AdminTable: FC<unknown> = () => {
  return (
    <div className="admin-table">
      <Table />
      <div className="admin-table__footer">
        <ResultCounter />
        <PageSelector />
      </div>
    </div>
  );
};

export default AdminTable;
