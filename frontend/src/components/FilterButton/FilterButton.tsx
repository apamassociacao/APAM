import { FC, HTMLAttributes } from 'react';
import './_filterButton.scss';

interface FilterProps extends HTMLAttributes<HTMLElement> {
  label: string;
  isActive: boolean;
}

const FilterButton: FC<FilterProps> = ({ onClick, label, isActive }) => {
  return (
    <span
      onClick={onClick}
      className={`filter-button ${isActive ? 'active' : ''}`}
    >
      {label}
    </span>
  );
};

export default FilterButton;
