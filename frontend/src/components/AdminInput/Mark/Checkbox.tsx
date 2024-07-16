import { FC, useId } from 'react';
import TickBox from '../Shared/TickBox/TickBox';
import TickBoxGroup from '../Shared/TickBox/TickBoxGroup';
import Title from '../Shared/Title/Title';

interface CheckboxProps {
  options: string[];
  title: string;
  required: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ options, title, required }) => {
  const groupId = useId();
  return (
    <div className="admin-input__checkbox">
      <Title text={title} required={required} />
      <TickBoxGroup>
        {options.map((label) => (
          <TickBox
            key={crypto.randomUUID()}
            type="checkbox"
            label={label}
            groupId={groupId}
          />
        ))}
      </TickBoxGroup>
    </div>
  );
};

export default Checkbox;
