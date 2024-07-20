import { FC } from 'react';
import SimpleTextBox from '../Shared/TextBox/Simple';
import { CommonInputProps } from '../common';
import Title from '../Shared/Title/Title';

const Url: FC<CommonInputProps> = ({ placeholder, title, required }) => (
  <div className="admin-input__email">
    <Title text={title} required={required} />
    <SimpleTextBox type="url" placeholder={placeholder} />
  </div>
);

export default Url;
