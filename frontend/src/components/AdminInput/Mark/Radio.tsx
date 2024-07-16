import { FC, useId } from 'react';
import TickBox from '../Shared/TickBox/TickBox';
import TickBoxGroup from '../Shared/TickBox/TickBoxGroup';
import Title from '../Shared/Title/Title';

interface RadioProps {
  options: string[];
  title: string;
  required: boolean;
}

const Radio: FC<RadioProps> = ({ options, title, required }) => {
  const groupId = useId();
  return (
    <div className="admin-input__radio">
      <Title text={title} required={required} />
      <TickBoxGroup>
        {options.map((label) => (
          <TickBox
            key={crypto.randomUUID()}
            type="radio"
            label={label}
            groupId={groupId}
          />
        ))}
      </TickBoxGroup>
    </div>
  );
};

export default Radio;
