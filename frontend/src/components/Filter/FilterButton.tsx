import './_filterButton.scss';

interface FilterProps {
  onClick: () => void;
  label: string;
  isActive: boolean;
}

const FilterButton = ({ onClick, label, isActive }: FilterProps) => {
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
