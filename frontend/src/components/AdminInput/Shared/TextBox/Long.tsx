import { FC } from 'react';
import { Placeholder } from '../../common';

import './_text-box.scss';

const LongTextBox: FC<Partial<Placeholder>> = ({ placeholder }) => (
  <textarea
    placeholder={placeholder}
    className="admin-input__long-text-box"
  ></textarea>
);

export default LongTextBox;
