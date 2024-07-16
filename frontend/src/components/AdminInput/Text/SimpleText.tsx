import { FC } from 'react';
import SimpleTextBox from '../Shared/TextBox/Simple';
import Title from '../Shared/Title/Title';
import { CommonInputProps } from '../common';

const SimpleText: FC<CommonInputProps> = ({ title, required, placeholder }) => (
  <div className="admin-input__simple-text">
    <Title text={title} required={required} />
    <SimpleTextBox placeholder={placeholder} />
  </div>
);

export default SimpleText;
