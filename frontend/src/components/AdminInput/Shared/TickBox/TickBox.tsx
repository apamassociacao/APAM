import { FC, useId } from 'react';

import './_box.scss';

interface TickBoxProps {
  label: string;
  type: 'radio' | 'checkbox';
  groupId: string;
}

const TickBox: FC<TickBoxProps> = ({ label, type, groupId }) => {
  const id = useId();
  return (
    <div className="admin-input__clickable-box">
      <input
        className="admin-input__box-input"
        id={id}
        value={id}
        type={type}
        name={groupId}
      />
      <label className="admin-input__box-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default TickBox;
