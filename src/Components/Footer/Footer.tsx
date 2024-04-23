import { FC } from 'react';

import Logo from '/images/logo.png';

import './_footer.scss';

const Footer: FC = () => 
  (
    <footer className="footer__container">
      <div className="header__logo-container">
            <img className="logo__footer" src={Logo}
                alt="APAM - Associação Mato-grossense Protetora dos Animais" />

            <div className="header__logo-container__content">
                <h1>APAM</h1>
                <span>Associação Mato-grossense Protetora dos Animais</span>
            </div>
        </div>

        <div>
          <p>Fone: (11) 1111-1111</p>
          <p>E-mail: apam@apam.com.br</p>
        </div>

        <div>
          <a>Logo</a>
        </div>
    </footer>
  )

export default Footer