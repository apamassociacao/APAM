import { FC, useId, useReducer } from 'react';

import './_toggle.scss';

interface ToggleProps {
  label: string;
}

const Toggle: FC<ToggleProps> = ({ label }) => {
  const [active, toggleActive] = useReducer((current) => !current, false);
  const id = useId();

  return (
    <div className="admin-input__toggle">
      <button
        id={id}
        className={`admin-input__toggle-button ${active ? 'active' : ''}`}
        type="button"
        onClick={toggleActive}
      ></button>
      <label className="admin-input__toggle-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Toggle;
