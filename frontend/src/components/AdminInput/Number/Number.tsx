import { ChangeEvent, FC, useId } from 'react';
import { CommonInputProps } from '../common';
import Title from '../Shared/Title/Title';

// Inherits the text box's style
import '../Shared/TextBox/_text-box.scss';
import './_number.scss';

interface NumberProps extends CommonInputProps {
  /** Is number floating point? */
  float?: boolean;

  /** Amount of decimal places. Defaults to 2 */
  precision?: number;

  /** Text label with an acronym, e.g. BRL or R$ */
  valueTypeHintLabel?: string;
}

const Number: FC<NumberProps> = ({
  title,
  required,
  float,
  precision,
  valueTypeHintLabel,
}) => {
  const id = useId();
  const places = precision || 2;
  const step = 1 * 10 ** -places;

  const format = (ev: ChangeEvent) => {
    const elem = ev.currentTarget as HTMLInputElement;
    if (!elem.value) return;

    // wipe useless values from integers
    if (!float) {
      try {
        const num = window.Number(elem.value);
        if (!num || num <= 0) elem.value = '';
      } catch {
        elem.value = '';
      }
      return;
    }

    // backwards typing effect for floating point numbers
    let text = elem.value.replace(/^[^1-9]*/, '');
    text = text.replace(/[^0-9]/g, '');
    try {
      let num: number = window.Number(text);
      if (!num || num < step) {
        elem.value = '';
        return;
      }
      // from absolute to expected
      num *= step;
      // rounding and trimming decimal places
      num = window.Number(num.toFixed(places));
      // localizing
      const localizer = new Intl.NumberFormat('pt-BR');
      elem.value = localizer.format(num);
    } catch {
      elem.value = '';
    }
  };

  return (
    <div className="admin-input__number">
      <Title text={title} required={required} />
      <div className="value-container">
        {valueTypeHintLabel ? (
          <label className="value-type-label" htmlFor={id}>
            {valueTypeHintLabel}
          </label>
        ) : undefined}
        <input
          type="text"
          className="admin-input__simple-text-box number-input"
          inputMode="numeric"
          step={float ? step : 1}
          min={0}
          id={id}
          onChange={format}
        />
      </div>
    </div>
  );
};

export default Number;
