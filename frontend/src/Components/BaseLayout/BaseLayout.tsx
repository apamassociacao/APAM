import { FC } from 'react';

import Header from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer.tsx';

const BaseLayout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default BaseLayout;
