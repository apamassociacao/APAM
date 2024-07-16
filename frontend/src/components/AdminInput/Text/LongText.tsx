import { FC } from 'react';
import LongTextBox from '../Shared/TextBox/Long';
import Title from '../Shared/Title/Title';
import { CommonInputProps } from '../common';

const LongText: FC<CommonInputProps> = ({ title, required, placeholder }) => (
  <div className="admin-input__long-text">
    <Title text={title} required={required} />
    <LongTextBox placeholder={placeholder} />
  </div>
);

export default LongText;
