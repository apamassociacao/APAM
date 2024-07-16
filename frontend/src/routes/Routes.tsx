import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;
