import { FC } from 'react';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import Home from '../pages/Home/Home.tsx';
import * as Admin from '../pages/Admin';

const urls = {
  animalRecord: '/admin/animal/list',
  transparencyRecord: '/admin/transparency/list',
  campainRecord: '/admin/campain/list',
} as const;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    // Emulate fresh login (there's no auth yet)
    path: '/admin',
    loader: ({ request }) => {
      const url = new URL(request.url);
      url.pathname = urls.animalRecord;
      url.search = '';
      url.searchParams.append('welcome', 'true');
      return redirect(url.toString());
    },
  },
  {
    path: '/admin/*',
    loader: () => redirect(urls.animalRecord),
  },
  {
    path: '/admin/animal/:_id?',
    element: <Admin.AnimalOverview />,
    loader: ({ params }): Response => {
      const _id = parseFloat(params._id!);

      if (!Number.isNaN(_id) && _id >= 0 && _id % 1 === 0)
        return new Response(null, { status: 200 });

      return redirect(urls.animalRecord);
    },
  },
  {
    path: '/admin/campain/:_id?',
    element: <Admin.CampainOverview />,
    loader: ({ params }) => {
      const _id = parseFloat(params._id!);

      if (!Number.isNaN(_id) && _id >= 0 && _id % 1 === 0)
        return new Response(null, { status: 200 });

      return redirect(urls.campainRecord);
    },
  },
  {
    path: '/admin/transparency/:year?',
    element: <Admin.TransparencyOverview />,
    loader: ({ params }) => {
      const year = parseFloat(params.year!);

      if (!Number.isNaN(year) && year >= 0 && year % 1 === 0)
        return new Response(null, { status: 200 });

      return redirect(urls.transparencyRecord);
    },
  },
  {
    path: '/admin/campain/*',
    loader: () => redirect(urls.campainRecord),
  },
  {
    path: urls.animalRecord,
    element: <Admin.AnimalRecord />,
  },
  {
    path: urls.transparencyRecord,
    element: <Admin.TransparencyRecord />,
  },
  {
    path: urls.campainRecord,
    element: <Admin.CampainRecord />,
  },
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;
