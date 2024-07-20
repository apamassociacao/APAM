import { ChangeEvent, FC } from 'react';
import { CommonInputProps } from '../common';
import Title from '../Shared/Title/Title';

// Inherits the text box's style
import '../Shared/TextBox/_text-box.scss';
import './_number.scss';

const Phone: FC<CommonInputProps> = ({ title, required }) => {
  const format = (ev: ChangeEvent) => {
    const elem: HTMLInputElement = ev.currentTarget as HTMLInputElement;
    if (!elem.value) return;
    // TODO: Prevent from or warn when typing a zero as the very first character
    let text: string = elem.value.replace(/[^0-9]/g, '');
    if (text.length > 11) text = text.slice(0, 11);
    const ddd = text.slice(0, 2);
    const nine = text[2] || '';
    const firstSignificant = text.slice(3, 7);
    const lastSignificant = text.slice(7, 11);
    let formatted: string = '';
    if (ddd) formatted = `(${ddd})`;
    if (nine) formatted += ` ${nine}`;
    if (firstSignificant) formatted += ` ${firstSignificant}`;
    if (lastSignificant) formatted += `-${lastSignificant}`;
    elem.value = formatted;
  };

  return (
    <div className="admin-input__phone">
      <Title text={title} required={required} />
      <input
        type="tel"
        pattern="\([1-9][0-9]\) ([0-9] )?[0-9]{4}-[0-9]{4}"
        className="admin-input__simple-text-box number-input"
        onChange={format}
      />
    </div>
  );
};

export default Phone;
