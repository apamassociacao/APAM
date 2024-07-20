import { FC } from 'react';
import SimpleTextBox from '../Shared/TextBox/Simple';
import { CommonInputProps } from '../common';
import Title from '../Shared/Title/Title';

const Email: FC<CommonInputProps> = ({ placeholder, title, required }) => (
  <div className="admin-input__email">
    <Title text={title} required={required} />
    <SimpleTextBox type="email" placeholder={placeholder} />
  </div>
);

export default Email;
