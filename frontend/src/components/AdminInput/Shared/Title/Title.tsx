import { FC } from 'react';

import './_title.scss';

interface TitleProps {
  text: string;
  required?: boolean;
}

const Title: FC<TitleProps> = ({ text, required }) => (
  <h2 className="admin-input__title">
    {text}
    {!required ? undefined : <span className="admin-input__title-star">*</span>}
  </h2>
);

export default Title;
