import { FC } from 'react';
import { InputProps } from '../common';
import Title from '../Shared/Title/Title';

interface DatetimeProps extends InputProps {
  min?: Date;
  max?: Date;
  value?: Date;
}

const Datetime: FC<DatetimeProps> = ({ title, required, min, max, value }) => (
  <div className="admin-input__datetime">
    <Title text={title} required={required} />
    <input
      type="datetime-local"
      className="admin-input__simple-text-box datetime-input"
      min={min?.valueOf?.()}
      max={max?.valueOf?.()}
      value={value?.valueOf?.()}
    />
  </div>
);
export default Datetime;
