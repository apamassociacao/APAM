import { FC } from 'react';

import './_logo.scss';

export type LogoProps = {
  src: string;
};

const Logo: FC<LogoProps> = ({ src }) => (
  <div className="logo-container">
    <img
      className="logo-container__img"
      src={src}
      alt="APAM - Associação Mato-grossense Protetora dos Animais"
    />

    <div className="logo-container__content">
      <h1>APAM</h1>
      <span>Associação Mato-grossense Protetora dos Animais</span>
    </div>
  </div>
);

export default Logo;