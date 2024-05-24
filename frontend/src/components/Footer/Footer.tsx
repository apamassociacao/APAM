import { FC } from 'react';

import logo from '/images/logo_footer.png';
import Logo from '@/components/Logo/Logo.tsx';

import './_footer.scss';

const Footer: FC = () => (
  <footer className="footer__container">
    <Logo src={logo} />

    <div>
      <p>Fone: (11) 1111-1111</p>
      <p>E-mail: apam@apam.com.br</p>
    </div>

    <div>
      <a>Logo</a>
    </div>
  </footer>
);

export default Footer;
