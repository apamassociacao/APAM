import { FC } from 'react';
import { useAdocaoFilter } from '@/hooks/AdocaoFilterProvider';
import type { UserFilter } from '@/hooks/AdocaoFilterProvider';
import './_filterButton.scss';

interface FilterProps {
  label: string;
  filterType: UserFilter;
}

const FilterButton: FC<FilterProps> = ({ label, filterType }) => {
  const { filter, setFilter } = useAdocaoFilter();

  return (
    <span
      onClick={() => setFilter(filterType)}
      className={`filter-button ${filter === filterType ? 'active' : ''}`}
    >
      {label}
    </span>
  );
};

export default FilterButton;
