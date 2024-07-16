import { FC } from 'react';
import { Placeholder } from '../../common';

import './_text-box.scss';

interface SimpleTextBoxProps extends Partial<Placeholder> {
  type?: 'email' | 'password' | 'url' | 'text';
}

const SimpleTextBox: FC<SimpleTextBoxProps> = ({ placeholder, type }) => (
  <input
    type={type ? type : 'text'}
    className="admin-input__simple-text-box"
    placeholder={placeholder}
  />
);

export default SimpleTextBox;
