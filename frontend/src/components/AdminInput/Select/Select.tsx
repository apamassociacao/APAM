import { FC, ReactElement } from 'react';
import Title from '../Shared/Title/Title';
import { CommonInputProps } from '../common';

import '../Shared/TextBox/_text-box.scss';

interface SelectProps extends CommonInputProps {
  options: Record<'id' | 'text', string>[];
}

const Select: FC<SelectProps> = ({ title, required, options, placeholder }) => {
  const optionElements: ReactElement[] = options.map((data) => (
    <option key={crypto.randomUUID()} value={data.id}>
      {data.text}
    </option>
  ));

  return (
    <div className="admin-input__select">
      <Title text={title} required={required} />
      <select className="admin-input__simple-text-box">
        <option value="">{placeholder || 'Selecione uma opção'}</option>
        {optionElements}
      </select>
    </div>
  );
};

export default Select;
