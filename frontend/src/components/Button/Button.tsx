import { FC, HTMLAttributes } from 'react';

import './_button.scss';

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => (
  <button
    className={`${className ? className : ''} button-container`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
