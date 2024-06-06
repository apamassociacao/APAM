import { FC, HTMLAttributes } from 'react';

import './_card.scss';

const Card: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...rest
}) => (
  <span className={`${className ? className : ''} card-container`} {...rest}>
    {children}
  </span>
);

export default Card;
