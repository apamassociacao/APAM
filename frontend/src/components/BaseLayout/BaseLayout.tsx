import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const BaseLayout: FC = () => (
  <>
    <Outlet />
  </>
);

export default BaseLayout;
