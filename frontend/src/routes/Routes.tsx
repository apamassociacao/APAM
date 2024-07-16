import { FC } from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import Home from '../pages/Home/Home.tsx';
import Adocao from '@/pages/Adocao/Adocao.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/adocao',
    element: <Adocao />,
  },
  {
    path: '/adocao/*',
    loader: () => redirect('/adocao'),
  },
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;
