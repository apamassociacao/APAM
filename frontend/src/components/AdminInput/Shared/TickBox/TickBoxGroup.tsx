import { FC, HTMLAttributes } from 'react';

const TickBoxGroup: FC<HTMLAttributes<HTMLElement>> = ({ children }) => (
  <div className="admin-input__box-group">{children}</div>
);

export default TickBoxGroup;
